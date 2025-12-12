import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import HomeIcon from "@mui/icons-material/Home";
import Mail from "@mui/icons-material/Mail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router";
import ButtonBase from "@mui/material/ButtonBase";
import Input from "@mui/material/Input";
import ContactUsModal from "./ContactUsModal";
import { useUserPreferences } from "utils/UserPreferencesContext";

const TopBar: React.FC = () => {
  let navigate = useNavigate();

  const { preferences, updatePreferences } = useUserPreferences();
  const { country, sector, lang } = preferences;

  const handleChangeCountry = (event: SelectChangeEvent) => {
    updatePreferences({ country: event.target.value as string });
  };
  const handleChangeSector = (event: SelectChangeEvent) => {
    updatePreferences({ sector: event.target.value as string });
  };
  const handleChangeLang = (event: SelectChangeEvent) => {
    updatePreferences({ lang: event.target.value as string });
  };

  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#009343",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            onClick={() => {
              navigate("/");
            }}
            aria-label="go to test page"
          >
            <Box component="img" src="Image 1.png" alt="Site Logo" />
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              variant="body1"
              sx={{
                color: "white",
              }}
            >
              You are Searching in
            </Typography>
            <FormControl variant="standard" sx={{ minWidth: 100 }}>
              <Select
                labelId="sector-select-label"
                value={sector}
                onChange={handleChangeSector}
                label="Sector"
                size="small"
                input={<Input disableUnderline />}
                sx={{
                  color: "white",
                  "& .MuiSvgIcon-root": { color: "white" },
                  "&:before, &:after": {
                    borderBottomColor: "white !important",
                  },
                  fontWeight: "bold",
                }}
              >
                <MenuItem value="marine">Marine (DMS)</MenuItem>
                <MenuItem value="oil">Oil & Gas</MenuItem>
                <MenuItem value="power">Power Generation</MenuItem>
                <MenuItem value="industrial">Industrial</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ minWidth: 100 }}>
              <Select
                labelId="country-select-label"
                value={country}
                onChange={handleChangeCountry}
                label="Country"
                size="small"
                input={<Input disableUnderline />}
                sx={{
                  color: "white",
                  "& .MuiSvgIcon-root": { color: "white" },
                  "&:before, &:after": {
                    borderBottomColor: "white !important",
                  },
                  fontWeight: "bold",
                }}
              >
                <MenuItem value="us">USA</MenuItem>
                <MenuItem value="id">Indonesia</MenuItem>
                <MenuItem value="jp">Japan</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ minWidth: 100 }}>
              <Select
                labelId="language-select-label"
                value={lang}
                onChange={handleChangeLang}
                label="Language"
                size="small"
                input={<Input disableUnderline />}
                sx={{
                  color: "white",
                  "& .MuiSvgIcon-root": { color: "white" },
                  "&:before, &:after": {
                    borderBottomColor: "white !important",
                  },
                  fontWeight: "bold",
                }}
              >
                <MenuItem value="en">English</MenuItem>
              </Select>
            </FormControl>

            <IconButton
              color="inherit"
              aria-label="home"
              sx={{ "&:hover": { backgroundColor: "#00C65A" } }}
            >
              <HomeIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="mail"
              sx={{ "&:hover": { backgroundColor: "#00C65A" } }}
              onClick={() => setOpen(true)}
            >
              <Mail />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="profile"
              sx={{ "&:hover": { backgroundColor: "#00C65A" } }}
            >
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
        <ContactUsModal open={open} onClose={() => setOpen(false)} />
      </AppBar>
      <Box sx={(theme) => theme.mixins.toolbar} />
    </Box>
  );
};

export default TopBar;
