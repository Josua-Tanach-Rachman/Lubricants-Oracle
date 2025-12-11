import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FilterSidebar() {
  return (
    <div style={{ width: 250, padding: 16 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
        FILTERS
      </Typography>

      {/* RANGE */}
      <Accordion defaultExpanded
        disableGutters
        elevation={0}
        square
        sx={{
            background: "transparent",
            boxShadow: "none",
            border: "none",
            "&:before": {
            display: "none",  // removes the default bottom border line
            },
        }}>
        <AccordionSummary 
            expandIcon={<ExpandMoreIcon />}
             sx={{
            paddingLeft: 0,
            paddingRight: 0
        }}>
          <Typography sx={{ fontWeight: 700 }}>RANGE</Typography>
        </AccordionSummary>
        <AccordionDetails
            sx={{
            
            paddingLeft: 0,
            paddingRight: 0,
            paddingBottom: 0
        }}>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="All" />
            <FormControlLabel control={<Checkbox />} label="Aircol PD" />
            <FormControlLabel control={<Checkbox />} label="Aircol SN" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      {/* APPLICATION */}
      <Accordion defaultExpanded
        disableGutters
        elevation={0}
        square
        sx={{
            background: "transparent",
            boxShadow: "none",
            border: "none",
            "&:before": {
            display: "none",  // removes the default bottom border line
            },
        }}>
        <AccordionSummary 
            expandIcon={<ExpandMoreIcon />}
             sx={{
            paddingLeft: 0,
            paddingRight: 0
        }}>
          <Typography sx={{ fontWeight: 700 }}>APPLICATION</Typography>
        </AccordionSummary>
        <AccordionDetails
            sx={{
            paddingLeft: 0,
            paddingRight: 0,
            paddingBottom: 0
        }}>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="All" />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Air Compressors - Reciprocating Crankcase"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      {/* VISCOSITY */}
      <Accordion defaultExpanded
        disableGutters
        elevation={0}
        square
        sx={{
            background: "transparent",
            boxShadow: "none",
            border: "none",
            "&:before": {
            display: "none",  // removes the default bottom border line
            },
        }}>
        <AccordionSummary 
            expandIcon={<ExpandMoreIcon />}
             sx={{
            paddingLeft: 0,
            paddingRight: 0
        }}>
          <Typography sx={{ fontWeight: 700 }}>VISCOSITY</Typography>
        </AccordionSummary>
        <AccordionDetails
            sx={{
            paddingLeft: 0,
            paddingRight: 0,
            paddingBottom: 0
        }}>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="All" />
            <FormControlLabel control={<Checkbox />} label="32" />
            <FormControlLabel control={<Checkbox />} label="46" />
            <FormControlLabel control={<Checkbox />} label="68" />
            <FormControlLabel control={<Checkbox />} label="100" />
            <FormControlLabel control={<Checkbox />} label="150" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
