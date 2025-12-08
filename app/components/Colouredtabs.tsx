// src/components/ColoredTabs.tsx
import React from "react";
import { Tabs, Tab } from "@mui/material";

interface ColoredTabsProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export default function ColoredTabs({ value, onChange }: ColoredTabsProps) {
  return (
    <Tabs
      value={value}
      onChange={onChange}
      variant="scrollable"
      scrollButtons="auto"
      sx={{
        // borderBottom: "2px solid #DDDDDD",
        "& .MuiTab-root": {
          textTransform: "none",
          fontWeight: 700,
          minWidth: 80,
          color: "text.secondary",
        },
        "& .Mui-selected": {
          color: "secondary.main",  
        },
        "& .MuiTabs-indicator": {
          backgroundColor: "secondary.main",
          height: "3px",
          padding : "0 px",
        },
      }}
    >
      <Tab label="COUNTRY" value={0} />
      <Tab label="PORT" value={1} />
      <Tab label="FAMILY" value={2} />
      <Tab label="RANGE" value={3} />
      <Tab label="PRODUCT" value={4} />

    </Tabs>
  );
}
