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
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PrintIcon from "@mui/icons-material/Print";
import DownloadIcon from "@mui/icons-material/Download";

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
          pb: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          PRODUCT COMPARISON
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            startIcon={<DownloadIcon />}
            sx={{
              color: "#009343",
              fontWeight: "bold",
              textTransform: "uppercase",
              "&:hover": { backgroundColor: "#e8f5e9" },
            }}
          >
            Download
          </Button>
          <Button
            startIcon={<PrintIcon />}
            sx={{
              color: "#009343",
              fontWeight: "bold",
              textTransform: "uppercase",
              mr: 1,
              "&:hover": { backgroundColor: "#e8f5e9" },
            }}
          >
            Print
          </Button>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
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