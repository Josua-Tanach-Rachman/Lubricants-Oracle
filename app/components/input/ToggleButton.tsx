import * as React from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function ToggleButtons() {
  const [selectedNumber, setSelectedNumber] = useState<string | null>("2");

  const handleNumberChange = (
    event: React.MouseEvent<HTMLElement>,
    newNumber: string | null
  ) => {
    if (newNumber !== null) {
      setSelectedNumber(newNumber);
    }
  };

  return (
    <>
      <Typography variant="body1" gutterBottom>
        Select a Number: {selectedNumber}
      </Typography>
      <ToggleButtonGroup
        value={selectedNumber} // Use the state variable
        exclusive
        onChange={handleNumberChange}
        aria-label="number selector"
        size="large"
      >
        <ToggleButton value="2" aria-label="number 2">
          <Typography variant="button">2</Typography>
        </ToggleButton>
        <ToggleButton value="3" aria-label="number 3">
          <Typography variant="button">3</Typography>
        </ToggleButton>
        <ToggleButton value="4" aria-label="number 4">
          <Typography variant="button">4</Typography>
        </ToggleButton>
        <ToggleButton value="5" aria-label="number 5">
          <Typography variant="button">5</Typography>
        </ToggleButton>
        <ToggleButton value="6" aria-label="number 6">
          <Typography variant="button">6</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
