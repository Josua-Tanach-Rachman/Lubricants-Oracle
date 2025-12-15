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
        "Product name": "Aircol PD 100",
          "Category": "Compressors",
          "Application": "Air Compressors - Reciprocating Crankcase",
          "OEM": "0 OEM approvals",
          "Viscosity": 100,
          "Grade": "ISO3448",
          "SubGrade": "ISO VG 100",
          "Characteristic": "Standard",
          "Base Oil Type Generic": "Mineral",
          "Ester EP Additives": "No",
          "Description": "A high-quality, ISO VG 100 mineral oil designed for reciprocating air compressor crankcases. Provides excellent anti-wear protection and minimizes deposit formation in moderate operating conditions."
    },
  ];
const product = items[0];

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
        {/* Breadcrumb & Search */}
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ borderBottom: "1px solid #DDDDDD" }}
          
        >
          <MuiBreadcrumbs />
          <SearchBar />
        </Box>

        <Box display="flex" gap="40px" sx={{height:"80vh"}}>
          {/* Sidebar */}
          <Box pl={4}>
            <Sidebar />
            </Box>
          {/* Content */}
          <Box
            sx={{ borderLeft: "1px solid #DDDDDD" }}
            padding={3}
            width="100%"
          >
            {/* Title */}
            <Typography variant="h4">
              {product["Product name"]}
            </Typography>

            <Typography variant="h6">
              Extreme Pressure Gear Oils
            </Typography>

            <Typography paragraph color="text.secondary">
              {product.Description}
            </Typography>

            {/* Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "green",
                color: "white",
                mb: 3,
                "&:hover": {
                  backgroundColor: "darkgreen",
                },
              }}
            >
              Contact Us
            </Button>

            {/* CHARACTERISTICS */}
            <Typography variant="h6" gutterBottom>
              CHARACTERISTICS
            </Typography>

            <Box sx={{ borderTop: "1px solid #E0E0E0" }}>
              {[
                { label: "Category", value: product.Category },
                { label: "Application", value: product.Application },
                { label: "OEM", value: product.OEM },
                { label: "Viscosity", value: product.Viscosity },
                { label: "Grade", value: product.Grade },
                { label: "Sub Grade", value: product.SubGrade },
                { label: "Characteristic", value: product.Characteristic },
                {
                  label: "Base Oil Type",
                  value: product["Base Oil Type Generic"],
                },
                {
                  label: "Ester EP Additives",
                  value: product["Ester EP Additives"],
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  paddingY={1.5}
                  sx={{ borderBottom: "1px solid #E0E0E0" }}
                >
                  <Typography
                    sx={{
                      color: "green",
                      fontWeight: 500,
                      minWidth: "260px",
                    }}
                  >
                    {item.label}
                  </Typography>

                  <Typography color="text.secondary">
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
