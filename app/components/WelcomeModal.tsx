import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function WelcomeModal() {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const [sector, setSector] = useState("marine");
  const handleChangeSector = (event: SelectChangeEvent) => {
    setSector(event.target.value as string);
  };

  const [country, setCountry] = useState("us");
  const handleChangeCountry = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };

  const [lang, setLang] = useState("en");
  const handleChangeLang = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
  };

  const [check, setCheck] = useState(false);
  const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(event.target.checked);
  };

  const navigate = useNavigate();
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="welcome-modal-title"
        slotProps={{
          paper: {
            sx: {
              width: "70vw",
              maxWidth: "none",
              height: "80vh",
            },
          },
        }}
      >
        <Grid flexGrow={1} container spacing={2} sx={{ width: "100%" }}>
          <Grid size={5}>
            <Box sx={{ backgroundColor: "#00813C", height: "100%" }}>
              <img
                src="Image 1.png"
                style={{ paddingLeft: "4rem", paddingTop: "4rem" }}
              />
              <Typography paddingLeft={8} color="white" variant="h1">
                Welcome
              </Typography>
              <Typography
                paddingLeft={8}
                color="white"
                variant="h5"
                paddingRight={8}
              >
                Before you start, We need a few things from You
              </Typography>
              <Typography paddingLeft={8} color="white">
                If you already have account, please{" "}
                <Link href="" color="inherit">
                  login
                </Link>{" "}
                to continue
              </Typography>
            </Box>
          </Grid>
          <Grid size={7} padding={8}>
            <Box>
              <Typography variant="h5" fontWeight={"bold"}>
                INDUSTRY SECTOR
              </Typography>
              <Typography>
                Please choose your industry sector to find relevant product
                information.You can change the sector at any time using the tool
                at the top of the page.
              </Typography>

              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sector}
                  // label="SELECT"
                  onChange={handleChangeSector}
                  sx={{
                    "& .MuiSelect-icon": {
                      color: "#00C65A",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#00C65A",
                    },
                  }}
                >
                  <MenuItem value={"marine"}>Marine (DMS)</MenuItem>
                  <MenuItem value={"oil"}>Oil & Gas</MenuItem>
                  <MenuItem value={"power"}>Power Generation</MenuItem>
                  <MenuItem value={"industrial"}>Industrial</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box mt={5}>
              <Typography variant="h5" fontWeight={"bold"}>
                COUNTRY
              </Typography>
              <FormControl fullWidth variant="outlined" sx={{ minWidth: 100 }}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={country}
                  // label="SELECT"
                  onChange={handleChangeCountry}
                  sx={{
                    "& .MuiSelect-icon": {
                      color: "#00C65A",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#00C65A",
                    },
                  }}
                >
                  <MenuItem value="us">USA</MenuItem>
                  <MenuItem value="id">Indonesia</MenuItem>
                  <MenuItem value="jp">Japan</MenuItem>
                </Select>
                {/* {errCountry && (
                  <FormHelperText>Field is required</FormHelperText>
                )} */}
              </FormControl>
            </Box>
            <Box mt={5}>
              <Typography variant="h5" fontWeight={"bold"}>
                LANGUAGE
              </Typography>
              <FormControl fullWidth variant="outlined" sx={{ minWidth: 100 }}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={lang}
                  // label="SELECT"
                  onChange={handleChangeLang}
                  sx={{
                    "& .MuiSelect-icon": {
                      color: "#00C65A",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#00C65A",
                    },
                  }}
                >
                  <MenuItem value="en">English</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box mt={2} display={"flex"} alignItems={"center"}>
              <Checkbox
                checked={check}
                onChange={handleChangeCheck}
                slotProps={{
                  input: { "aria-label": "controlled" },
                }}
                sx={{
                  "&.Mui-checked": {
                    color: "green",
                  },
                }}
              />
              <Typography>Remember my selection</Typography>
            </Box>
            <br />
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography>
                By clicking continue button, you have read and agree to{" "}
                <Link href="" color="inherit">
                  terms & conditions
                </Link>{" "}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  whiteSpace: "nowrap",
                  width: "fit-content",
                  backgroundColor: "green",
                  color: "white",
                  // Optional: Add a slightly darker green for the hover state
                  "&:hover": {
                    backgroundColor: "darkgreen",
                  },
                }}
                onClick={() => {
                  handleClose();
                }}
              >
                <Typography>Continue &gt;</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}
