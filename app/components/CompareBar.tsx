import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeProvider } from "@mui/material";

const MAX_COMPARE_ITEMS = 4;

type SelectedItem = {
  id: string;
  name: string;
  [key: string]: any;
};

type CompareBarProps = {
  selectedItems: SelectedItem[];

  onCompare: () => void;
  onRemoveItem: (id: string) => void;
  onClear: () => void;
};

export default function CompareBar({
  selectedItems,
  onCompare,
  onRemoveItem,
  onClear,
}: CompareBarProps) {
  if (selectedItems.length < 2) return null;

  return (
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
        }}
      >
        <h3 style={{ margin: 0, fontWeight: "bold" }}>Comparison List</h3>
        <span style={{ fontSize: "12px", color: "#666" }}>
          {selectedItems.length}/{MAX_COMPARE_ITEMS}
        </span>
      </Box>

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
            <span style={{ color: "#009343" }}>{item.name}</span>
            <button
              onClick={() => onRemoveItem(item.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                padding: "4px",
              }}
            >
              <CloseIcon
                style={{
                  fontSize: "18px",
                  color: "#666",
                }}
              />
            </button>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={onCompare}
          disabled={selectedItems.length < 2}
          sx={{
            backgroundColor: "#009343",
            "&:hover": {
              backgroundColor: "#007a37",
            },
          }}
        >
          Compare ({selectedItems.length})
        </Button>
        <Button
          variant="text"
          color="secondary"
          onClick={onClear}
          sx={{ color: "#009343" }}
        >
          Clear Selection
        </Button>
      </Box>
    </Box>
  );
}

export { MAX_COMPARE_ITEMS };
