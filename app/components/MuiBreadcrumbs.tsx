import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function MuiBreadcrumbs() {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
      >
        <Link
          underline="hover"
          href="/"
          sx={{
            color: "primary.main",
            "&:hover": {
              color: "secondary.main",
            },
          }}
        >
          Home
        </Link>
        <Typography color="text.primary">Details</Typography>
      </Breadcrumbs>
    </Box>
  );
}
