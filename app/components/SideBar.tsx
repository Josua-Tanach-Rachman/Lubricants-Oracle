import { Box, ThemeProvider, Typography } from "@mui/material";
import { colors } from "@mui/material";
import TopBar from "~/components/topbar";
import { theme } from "~/Theme"; // <-- import the theme
import ListIcon from "@mui/icons-material/List";
import SettingsIcon from "@mui/icons-material/Settings";
import OilBarrelIcon from "@mui/icons-material/OilBarrel";
export default function Sidebar() {
  return (
    <>
      <Box
        paddingTop={3}
        display={"flex"}
        flexDirection={"column"}
        gap={"20px"}
      >
        <ThemeProvider theme={theme}>
          <Box display={"flex"} alignItems={"center"} gap={"20px"}>
            <ListIcon />
            <Box>
              <Typography>Product Family</Typography>
              <Typography>Alpha</Typography>
            </Box>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"20px"}>
            <SettingsIcon />
            <Box>
              <Typography>Application</Typography>
              <Typography>Gear Boxes</Typography>
            </Box>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"20px"}>
            <OilBarrelIcon />
            <Box>
              <Typography>Product Type</Typography>
              <Typography>Ancillaries</Typography>
            </Box>
          </Box>
        </ThemeProvider>
      </Box>
    </>
  );
}
