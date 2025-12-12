import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  IconButton,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface FlattenedProduct {
  id: string;
  name: string;
  application: string;
  "Product name": string;
  Application: string;
  Viscosity: number;
  SubGrade: string;
  Characteristic: string;
  "Base Oil Type Generic": string;
  OEM: string;
  "Ester EP Additives": string;
}

interface CompareModalProps {
  open: boolean;
  onClose: () => void;
  items: FlattenedProduct[];
}

const COMPARISON_PROPERTIES = [
  { key: "Product name", label: "Product Name" },
  { key: "Application", label: "Application" },
  { key: "Viscosity", label: "Viscosity" },
  { key: "SubGrade", label: "ISO Grade" },
  { key: "Characteristic", label: "Characteristic" },
  { key: "Base Oil Type Generic", label: "Base Oil Type" },
  { key: "OEM", label: "OEM Approvals" },
  { key: "Ester EP Additives", label: "EP Additives" },
];

export default function CompareModal({
  open,
  onClose,
  items,
}: CompareModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xl"
      fullWidth
      slotProps={{ paper: { sx: { borderRadius: "12px", p: 2 } } }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 1,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Product Comparison
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 0 }}>
        <TableContainer>
          <Table stickyHeader>
            <TableBody>
              <TableRow sx={{ backgroundColor: "#e0f7fa" }}>
                <TableCell
                  sx={{
                    width: "200px",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    borderRight: "1px solid #ccc",
                  }}
                >
                  Properties
                </TableCell>
                {items.map((item) => (
                  <TableCell
                    key={item.id}
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      color: "#009343",
                    }}
                  >
                    {item["Product name"]}
                  </TableCell>
                ))}
              </TableRow>

              {COMPARISON_PROPERTIES.map((prop) => (
                <TableRow key={prop.key}>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      width: "200px",
                      borderRight: "1px solid #ccc",
                    }}
                  >
                    {prop.label}
                  </TableCell>
                  {items.map((item) => (
                    <TableCell key={`${item.id}-${prop.key}`} align="center">
                      {
                        item[
                          prop.key as keyof FlattenedProduct
                        ] as React.ReactNode
                      }
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
    </Dialog>
  );
}
