import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  TextField,
} from "@mui/material";
import Modal from '@mui/material/Modal';
import {styled} from '@mui/material/styles';
import products from "../../json/product.json";
import links from "../../json/links.json";
import categories from "../../json/category.json";
import application from "../../json/application.json";
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { List } from 'react-window';
import type{ RowComponentProps } from 'react-window';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const style = {
  position: 'absolute',
  top: '50vh',
  left: '100vh',
  transform: 'translate(-50%, -50%)',
  width: '70rem',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function renderRowCategory(props: RowComponentProps) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  )
}
function renderRowProduct(props: RowComponentProps) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  )
}


export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openProductApplication, setProductApplication] = React.useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openApplication, setOpenApplication] = useState(false);
  
  return (
    
    <Box>
      <Box>
        navbar
      </Box>
      {/* HERO */}
      <Box
        sx={{
          height: "90vh",
          backgroundImage: "url('/images/HomeBackground.jpg')", // ganti sesuai file kamu
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          width : '100%' , 
          justifyContent: "center",
          mb: 4,
        }}
      >

        {/* SEARCH SECTION */}
        <Box display={"flex"} sx={{justifyContent:"center", width:"auto", padding:"2rem"}} >
          <Button sx={{color:"gray", backgroundColor:"white", width:"70%"}} onClick={handleOpen}>Search by name, category, application, port or country ...</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              >
              <Box sx={style}>
                <Box
                  component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                  noValidate
                  autoComplete="off"
                >
                <TextField id="filled-basic" variant="filled" placeholder="Start typing..."/>
                </Box>
                  <h2 className='SearchText'>Search by name, category, application, port or country ... </h2>
              </Box>
            </Modal>
          </Box>
        {/* BROWSE BY CATEGORY */}
        
        <Box sx={{ mb: 6, height:"100rem", width:"100%" }}>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 3, color:"white" }} display={"flex"} justifyContent={"center"}>
            Browse by Product Category
          </Typography>

          <Grid display={"flex"} justifyContent={"center"}>
            <Grid>
              <Box
                sx={{
                  borderRadius: "12px",
                  gap: "3rem",
                  display: "flex"
                }}
              >
                {/* BUTTON CATEGORY */}
                <Button variant="contained" onClick={() => setOpenCategory(!openCategory)}>
                  Browse Product Category
                </Button>

                {/* DROPDOWN CATEGORY */}
                {openCategory && (
                  <Paper
                    elevation={4}
                    sx={{
                      width: "30%",
                      display:"flex",
                      flexDirection:"column",
                      overflowX: "auto",
                      position: "absolute",
                      mt: "3rem",
                      p: 1,
                      zIndex: 10
                    }}
                  >
                    <Typography fontWeight={700} sx={{ mb: 1 }}>
                      PRODUCT CATEGORY
                    </Typography>

                    <ListItem>
                      {categories.map((cat) => (
                        <ListItem key={cat.id} disablePadding>
                          <ListItemButton>
                            <ListItemText primary={cat.title} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </ListItem>
                  </Paper>
                )}

                {/* BUTTON APPLICATION */}
                <Button variant="contained" onClick={() => setOpenApplication(!openApplication)}>
                  Browse Category Application
                </Button>

                {/* DROPDOWN APPLICATION */}
                {openApplication && (
                  <Paper
                    elevation={4}
                    sx={{
                      position: 'absolute',
                      top: '50vh',
                      left: '100vh',
                      transform: 'translate(-50%, -50%)',
                      width: '70rem',
                      bgcolor: 'background.paper',
                      border: '2px solid #000',
                      boxShadow: 24,
                      p: 4,
                    }}
                  >
                    <Typography fontWeight={700} sx={{ mb: 1 }}>
                      APPLICATION LIST
                    </Typography>

                    <ListItem>
                      {application.map((item) => (
                        <ListItem key={item.id} disablePadding>
                          <ListItemButton>
                            <ListItemText primary={item.title} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </ListItem>
                  </Paper>
                )}
              <Button variant="contained" sx={{backgroundColor:"darkgray"}}  disabled>
                Browse Product
              </Button>    
              </Box>
              
            </Grid>
          </Grid>
        </Box>
      </Box>
          {/* PROMOTION BANNER
          <Box
            sx={{
              background: "#F4F9FF",
              borderRadius: "16px",
              p: 3,
              mb: 6,
            }}
          >
            <Typography variant="h5" fontWeight={700} sx={{ mb: 1 }}>
              Trusted supply chain to keep your fleet moving
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Reliable marine lubricants delivery for 86 years.
            </Typography>
            <Button variant="contained" color="success">
              Contact Us
            </Button>
          </Box> */}

        {/* PRODUCTS GRID */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
            Products
          </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
              {products.map((item) => (
                <Grid size={4} key={item.id}>
                  <Button
                    sx={{
                      border: "1px solid #e0e0e0",
                      padding: 3,
                      borderRadius: "4px",
                      height: "100%",
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'start',
                    }}
                    >
                              
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="green"
                      sx={{ flexGrow: 1 }}
                    >
                      {item.title}
                    </Typography>

                      {/* Category */}
                    <Typography color="text.secondary" sx={{ mb: 1 }}>
                      {item.category}
                    </Typography>

                      {/* Description */}
                    <Typography variant="body2" color="text.secondary" align='left'>
                      {item.description}
                    </Typography>
                  </Button>
                </Grid>
              ))}
          </Grid>
        </Box>

        {/* LINKS GRID */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
            Popular Links
          </Typography>

          <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
                {links.map((item) => (
                  <Grid size={4} key={item.id}>
                    <Button
                      sx={{
                      border: "1px solid #e0e0e0",
                      padding: 3,
                      borderRadius: "4px",
                      height: "100%",
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'start',
                    }}
                  >
                              
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="green"
                  sx={{ flexGrow: 1 }}
                >
                  {item.title}
                </Typography>

                {/* Description */}
                <Typography variant="body2" color="text.secondary" align='left'>
                  {item.description}
                </Typography>
              </Button>
            </Grid>
            ))}
          </Grid>
        </Box>

        {/* FOOTER */}
        <Box
          sx={{
            textAlign: "center",
            py: 4,
            color: "#777",
          }}
        >
          © 2025 Castrol Marine Lubricants
        </Box>
    
    </Box>
  );
}
