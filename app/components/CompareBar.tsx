import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { theme } from "~/Theme";
import { ThemeProvider } from "@mui/material";

type CompareBarProps = {
  selectedItems: { id: number | string; name: string }[];
  onCompare: () => void;
  onRemoveItem: (id: number | string) => void;
  onClear?: () => void;
};

export default function CompareBar({
  selectedItems,
  onCompare,
  onRemoveItem,
  onClear,
}: CompareBarProps) {
  if (selectedItems.length < 2) return null;

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 3,
          px: 2,
          py: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          zIndex: 1500,
          maxWidth: 400,
          maxHeight: "60vh",
          overflowY: "auto",
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Comparison List
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "100%",
          }}
        >
          {selectedItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: "#f0f0f0",
                px: 1,
                py: 0.5,
                borderRadius: 1,
              }}
            >
              <Typography variant="body2" color="primary">
                {item.name}
              </Typography>
              <IconButton size="small" onClick={() => onRemoveItem(item.id)}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
          ))}
        </Box>

        <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
          <Button variant="contained" color="primary" onClick={onCompare}>
            Compare ({selectedItems.length})
          </Button>
          {onClear && (
            <Button variant="text" color="secondary" onClick={onClear}>
              Clear Selection
            </Button>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
