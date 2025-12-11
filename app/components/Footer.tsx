import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import { theme } from "~/Theme";

const Footer: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        // position="fixed"
        bottom={0}
        left={0}
        bgcolor="#D7D7D7"
        boxShadow={1}
        // paddingTop={2}
        // paddingBottom={2}
      >
        <Box display="flex" flexDirection="column" p={2} paddingLeft={4}>
          <Typography fontWeight="bold">CASTROL LIMITED</Typography>
          <Typography>COPYRIGHT ©2021</Typography>
        </Box>

        <Box display="flex" gap={2} p={2} paddingRight={4}>
          <Link color="inherit" href="#" variant="body2">
            <Typography>PRIVACY STATEMENT</Typography>
          </Link>
          <Link color="inherit" href="#">
            <Typography>LEGAL NOTICE</Typography>
          </Link>
          <Link color="inherit" href="#">
            <Typography>TERMS & CONDITIONS</Typography>
          </Link>
          <Link color="inherit" href="#">
            <Typography>CONTACT US</Typography>
          </Link>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
