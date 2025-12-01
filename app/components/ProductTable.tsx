import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Typography,
  Paper
} from "@mui/material";
import Box from "@mui/material/Box";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';




const products = [
  { name: "Alpha SP 68", category: "Gear Oils", application: "Gearboxes" },
  { name: "Alpha SP 100", category: "Gear Oils", application: "Gearboxes" },
  { name: "Alpha SP 150", category: "Gear Oils", application: "Gearboxes" },
  { name: "Alpha SP 220", category: "Gear Oils", application: "Gearboxes" },
  { name: "Alpha SP 680", category: "Gear Oils", application: "Gearboxes" },
  { name: "Alphasyn HG 220", category: "Gear Oils", application: "Gearboxes" },
  { name: "Alphasyn HG 320", category: "Gear Oils", application: "Gearboxes" },
];

export default function ProductTable() {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table>
        {/* HEADER */}
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 700 }}>COMPARE</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    PRODUCT NAME
                    <ArrowDownwardIcon sx={{ fontSize: 18 }} />
                </Box>
            </TableCell>

            <TableCell sx={{ fontWeight: 700 }}>CATEGORY</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>APPLICATION</TableCell>
          </TableRow>
        </TableHead>

        {/* BODY */}
        <TableBody>
          {products.map((p, index) => (
            <TableRow key={index} hover>
              <TableCell>
                <Checkbox />
              </TableCell>

              <TableCell sx={{ color: "green", fontWeight: 600 }}>
                <Typography
                  component="span"
                  sx={{
                    color: "#0E7A0D",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {p.name}
                </Typography>
              </TableCell>

              <TableCell>{p.category}</TableCell>
              <TableCell>{p.application}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
