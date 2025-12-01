import React, { useState } from "react";
import CheckboxLabels from "../../components/Checkbox_label";
import BreadCrumbs from "../../components/breadcrumbs";
import MuiBreadcrumbs from "../../components/MuiBreadcrumbs";
import MuiTypography from "~/components/MuiTypography";
import { createTheme } from "@mui/material/styles";
import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import { colors } from "@mui/material";
import TopBar from "~/components/topbar";
import { theme } from "~/Theme"; // <-- import the theme
import FilterSidebar from "~/components/Filtersidebar";
import ColouredTabs from "~/components/Colouredtabs";
// import Footer from "~/components/Footer";
import SearchBar from "~/components/SearchBar";
import Sidebar from "~/components/SideBar";
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

export default function ProductRange() {
  const [tabValue, setTabValue] = React.useState(0);
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
    <>
      <ThemeProvider theme={theme}>
        {/* Breadcrumb */}
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          sx={{ borderBottom: "1px solid #DDDDDD" }}
        >
          <MuiBreadcrumbs />
          <SearchBar />
        </Box>

        <Box display={"flex"} gap={"40px"}>
          <Sidebar />
          <Box
            gap={"40px"}
            sx={{ borderLeft: "1px solid #DDDDDD" }}
            padding={3}
          >
            <Typography variant="h4">Alpha SP Range</Typography>
            <Typography variant="h6">Extreme Pressure Gear Oils</Typography>

            <Typography>
              The alpha SP gear oil range of high quality lubricants are based
              on highly refined mineral oil, enhanced with sulphur/phophorus
              extrem pressure additive technology, providing outstanding thermal
              stability and high load carrying capacity
            </Typography>

            <Button
              variant="contained"
              sx={{
                whiteSpace: "nowrap",
                width: "fit-content",
                backgroundColor: "green",
                color: "white",
                // Optional: Add a slightly darker green for the hover state
                "&:hover": {
                  backgroundColor: "darkgreen",
                },
              }}
              onClick={() => {}}
            >
              <Typography>Contact Us</Typography>
            </Button>
            <Typography marginTop={2} marginBottom={2} variant="h6">
              Products
            </Typography>

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

            {/* <CompareBar
              selectedItems={selectedItems}
              onCompare={handleCompare}
              onRemoveItem={handleRemoveItem}
              onClear={handleClear}
            /> */}
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
