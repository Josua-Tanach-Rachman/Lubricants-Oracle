import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
} from "@mui/material";
import CompareBar from "~/components/CompareBar";

export default function ProductPage() {
  const [selectedItems, setSelectedItems] = useState<
    { id: number; name: string }[]
  >([]);

  const items = [
    {
      id: 1,
      name: "Alphasyn HG 220",
      category: "Gear Oils",
      application: "Gearboxes",
    },
    {
      id: 2,
      name: "Alphasyn HG 230",
      category: "Gear Oils",
      application: "Gearboxes",
    },
    {
      id: 3,
      name: "Alphasyn HG 240",
      category: "Gear Oils",
      application: "Gearboxes",
    },
    {
      id: 4,
      name: "Alphasyn HG 250",
      category: "Gear Oils",
      application: "Gearboxes",
    },
  ];

  const handleToggleSelect = (item: { id: number; name: string }) => {
    setSelectedItems((prev) =>
      prev.find((i) => i.id === item.id)
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, item]
    );
  };

  const handleRemoveItem = (id: number) => {
    setSelectedItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleCompare = () => {
    console.log("Comparing items:", selectedItems);
  };

  const handleClear = () => setSelectedItems([]);

  return (
    <div>
      <h2 style={{ marginBottom: 20 }}>Products</h2>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Compare</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Application</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedItems.some((i) => i.id === item.id)}
                    onChange={() =>
                      handleToggleSelect({ id: item.id, name: item.name })
                    }
                    sx={{
                      "&.Mui-checked": {
                        color: "green",
                      },
                    }}
                  />
                </TableCell>

                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.application}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CompareBar
        selectedItems={selectedItems}
        onCompare={handleCompare}
        onRemoveItem={handleRemoveItem}
        onClear={handleClear}
      />
    </div>
  );
}
