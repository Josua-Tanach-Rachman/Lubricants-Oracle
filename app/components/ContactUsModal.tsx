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
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { useNavigate } from "react-router";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

type ContactUsModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ContactUsModal({ open, onClose }: ContactUsModalProps) {
  const [country, setCountry] = useState("us");
  const handleChangeCountry = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };

  const [sector, setSector] = useState("marine");
  const handleChangeSector = (event: SelectChangeEvent) => {
    setSector(event.target.value as string);
  };

  const [subject, setSubject] = useState("fam");
  const handleChangeSubject = (event: SelectChangeEvent) => {
    setSubject(event.target.value as string);
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="welcome-modal-title"
        slotProps={{
          paper: {
            sx: {
              width: "70vw",
              maxWidth: "none",
              height: "80vh",
              overflow: "hidden",
            },
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
            zIndex: 10,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Grid
          flexGrow={1}
          container
          spacing={2}
          sx={{ width: "100%", height: "100%" }}
        >
          <Grid size={5} position={"sticky"}>
            <Box sx={{ backgroundColor: "#00813C", height: "100%" }}>
              <img
                src="Image 1.png"
                style={{ paddingLeft: "4rem", paddingTop: "4rem" }}
              />
              <Typography paddingLeft={8} color="white" variant="h1">
                Contact
              </Typography>
              <Typography
                paddingLeft={8}
                color="white"
                variant="h5"
                paddingRight={8}
              >
                Please Complete All Fields
              </Typography>
            </Box>
          </Grid>
          <Grid
            size={7}
            padding={8}
            sx={{
              height: "100%",
              overflowY: "auto",
            }}
          >
            <Box mt={-3}>
              <FormControl fullWidth variant="outlined" sx={{ minWidth: 100 }}>
                <Typography fontWeight={"bold"}>FULL NAME</Typography>
                <TextField
                  size="small"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#00C65A",
                      },
                    },
                  }}
                />
              </FormControl>
            </Box>
            <Box mt={3}>
              <FormControl fullWidth variant="outlined" sx={{ minWidth: 100 }}>
                <Typography fontWeight={"bold"}>EMAIL ADDRESS</Typography>
                <TextField
                  size="small"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#00C65A",
                      },
                    },
                  }}
                />
              </FormControl>
            </Box>
            <Box mt={3}>
              <FormControl fullWidth variant="outlined" sx={{ minWidth: 100 }}>
                <Typography fontWeight={"bold"}>COMPANY NAME</Typography>
                <TextField
                  size="small"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#00C65A",
                      },
                    },
                  }}
                />
              </FormControl>
            </Box>
            <Box mt={3}>
              <Typography fontWeight={"bold"}>LINE OF BUSINESS</Typography>
              <FormControl fullWidth size="small">
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
            <Box mt={3}>
              <Typography fontWeight={"bold"}>COUNTRY OF BUSINESS</Typography>
              <FormControl
                fullWidth
                size="small"
                variant="outlined"
                sx={{ minWidth: 100 }}
              >
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
            <Box mt={3}>
              <Typography fontWeight={"bold"}>SUBJECT</Typography>
              <FormControl
                fullWidth
                size="small"
                variant="outlined"
                sx={{ minWidth: 100 }}
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={subject}
                  // label="SELECT"
                  onChange={handleChangeSubject}
                  sx={{
                    "& .MuiSelect-icon": {
                      color: "#00C65A",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#00C65A",
                    },
                  }}
                >
                  <MenuItem value="fam">Family</MenuItem>
                  <MenuItem value="range">Range</MenuItem>
                  <MenuItem value="product">Product</MenuItem>
                </Select>
                {/* {errCountry && (
                  <FormHelperText>Field is required</FormHelperText>
                )} */}
              </FormControl>
            </Box>
            <Box mt={3}>
              <Typography fontWeight={"bold"}>
                YOUR COMMENT OR QUESTION
              </Typography>
              <TextField
                fullWidth
                multiline
                minRows={4}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "100%",
                    "&.Mui-focused fieldset": {
                      borderColor: "#00C65A",
                    },
                  },
                }}
              />
            </Box>

            <Box display={"flex"} mt={3}>
              <Button
                variant="contained"
                sx={{
                  whiteSpace: "nowrap",
                  width: "fit-content",
                  backgroundColor: "green",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "darkgreen",
                  },
                }}
                onClick={() => {
                  onClose;
                }}
              >
                <Typography>SUBMIT</Typography>
              </Button>
              <Button
                variant="text"
                sx={{
                  whiteSpace: "nowrap",
                  width: "fit-content",
                  backgroundColor: "white",
                  color: "green",
                  "&:hover": {
                    backgroundColor: "gray",
                  },
                }}
                onClick={() => {
                  onClose;
                }}
              >
                <Typography>CANCEL</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}
