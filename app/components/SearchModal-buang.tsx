// src/components/SearchModal.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

const CATEGORIES = [
  { title: "Compressors", count: 18 },
  { title: "Engine Oils", count: 23 },
  { title: "Environmentally Responsible", count: 1 },
  { title: "Gear Oils", count: 33 },
  { title: "Grease Applications", count: 14 },
  { title: "Hydraulics", count: 31 },
  { title: "Other", count: 18 },
];

const APPLICATIONS = [
  { title: "Air Compressors - Reciprocating Crankcase", count: 7 },
  { title: "Air Compressors - Rotary Screw", count: 3 },
  { title: "Dewatering Protective", count: 1 },
  { title: "Diesel Engines - Cooling System", count: 2 },
  { title: "Diesel Engines - Crankcase", count: 16 },
  { title: "Gas Compressors - Reciprocating Cylinder", count: 8 },
  { title: "Gas Engine", count: 2 },
];

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      // small timeout so Dialog is mounted before focus
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredCategories = useMemo(() => {
    if (!query.trim()) return CATEGORIES;
    const q = query.toLowerCase();
    return CATEGORIES.filter((c) => c.title.toLowerCase().includes(q));
  }, [query]);

  const filteredApplications = useMemo(() => {
    if (!query.trim()) return APPLICATIONS;
    const q = query.toLowerCase();
    return APPLICATIONS.filter((a) => a.title.toLowerCase().includes(q));
  }, [query]);

  const navigate = useNavigate();

  const handleItemClick = (title: string) => {
    // do navigation or set search state here
    console.log("Selected:", title);
    onClose();
    navigate("/04/");
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          maxHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          borderRadius: 0,
        },
      }}
    >
      {/* Header area */}
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ borderBottom: "1px solid", borderColor: "divider" }}
      >
        <Toolbar
          sx={{
            flexDirection: "column", // <-- stack vertically
            alignItems: "stretch", // make all boxes full width
            gap: 2,
            py: 1,
          }}
        >
          {/* Box 1 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 1,
            }}
          >
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ textAlign: "right" }}
            >
              Can't find what you are looking for?{" "}
              <Link href="#" underline="none">
                Let us know
              </Link>
            </Typography>

            <IconButton aria-label="close" onClick={onClose} size="large">
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Box 2 */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Start typing...
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              Search by OEM, product name, product category or application
            </Typography>
          </Box>

          {/* Box 3 */}
          <Box sx={{ width: "100%", px: 1, pb: 2 }}>
            <TextField
              inputRef={inputRef}
              value={query}
              onChange={handleChange}
              fullWidth
              placeholder="Search products, categories, applications..."
              variant="standard"
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <Box
        component="main"
        sx={{
          p: 3,
          overflowY: "auto",
          flex: 1, // makes content scroll but header stays fixed
        }}
      >
        <Box sx={{ my: 2, textAlign: "center", color: "text.secondary" }}>
          OR BROWSE
        </Box>

        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
          {/* Left column */}
          <Box
            sx={{
              width: { xs: "100%", md: "calc(50% - 12px)" },
              minWidth: 280,
            }}
          >
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                PRODUCT CATEGORIES
              </Typography>
              <List disablePadding>
                {filteredCategories.map((c) => (
                  <React.Fragment key={c.title}>
                    <ListItemButton onClick={() => handleItemClick(c.title)}>
                      <ListItemText
                        primary={
                          <Typography sx={{ color: "success.main" }}>
                            {c.title}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="caption">
                            {c.count} Product(s)
                          </Typography>
                        }
                      />
                    </ListItemButton>
                    <Divider component="li" />
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Box>

          {/* Right column */}
          <Box
            sx={{
              width: { xs: "100%", md: "calc(50% - 12px)" },
              minWidth: 280,
            }}
          >
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                APPLICATIONS
              </Typography>
              <List disablePadding>
                {filteredApplications.map((a) => (
                  <React.Fragment key={a.title}>
                    <ListItemButton onClick={() => handleItemClick(a.title)}>
                      <ListItemText
                        primary={
                          <Typography sx={{ color: "success.main" }}>
                            {a.title}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="caption">
                            {a.count} Product(s)
                          </Typography>
                        }
                      />
                    </ListItemButton>
                    <Divider component="li" />
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}
