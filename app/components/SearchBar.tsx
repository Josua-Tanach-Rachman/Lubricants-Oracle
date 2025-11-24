// src/components/SearchBar.tsx
import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SearchModal from "./SearchModal"; // <-- import your modal

const SearchBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Search Bar */}
      <TextField
        variant="outlined"
        placeholder="Search Products..."
        size="small"
        onClick={handleOpen}               // ← OPEN MODAL ON CLICK
        InputProps={{
          readOnly: true,                 // Prevent typing, modal handles the search
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
        sx={{
          width: "450px",
          cursor: "pointer",

          "& .MuiOutlinedInput-root": {
            borderRadius: 0,
            cursor: "pointer",

            "& fieldset": {
              borderColor: "#DDDDDD",
            },
            "&:hover fieldset": {
              borderColor: "#DDDDDD",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#DDDDDD",
              borderWidth: "1px",
            },
          },

          "& .MuiInputBase-input": {
            padding: "10px",
            cursor: "pointer",
          },
        }}
      />

      {/* Modal */}
      <SearchModal open={open} onClose={handleClose} />
    </>
  );
};

export default SearchBar;
