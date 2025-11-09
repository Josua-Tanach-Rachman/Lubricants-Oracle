import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CheckboxLabels from "~/components/checkbox/CheckboxLabels";
import BasicSelect from "~/components/input/BasicSelect";
import ResponsiveAppBar from "~/components/topbar/ResponsiveAppBar";
import BasicModal from "~/components/modal/BasicModal";
import Input from "@mui/material/Input";
import DiscreteSlider from "~/components/input/Slider";
import ToggleButtons from "~/components/input/ToggleButton";
import BasicBreadcrumbs from "~/components/breadcrumbs/Breadcrumbs";
import AccordionUsage from "~/components/accordion/Accordion";
import LabTabs from "~/components/tabs/tabs";
import BasicTable from "~/components/table/table";
import MouseHoverPopover from "~/components/popover/popover";
export default function Home() {
  const ariaLabel = { "aria-label": "description" };
  return (
    <>
      <Box sx={{ pb: 10 }}>
        <ResponsiveAppBar />
      </Box>
      <h1>Testing breadcrumbs</h1>
      <BasicBreadcrumbs />
      <Box sx={{ p: 2 }}>
        <h1>Input Selection</h1>
        <BasicSelect />
      </Box>
      <h1>Testing Button</h1>
      <Button variant="contained">Continue</Button>
      <Button variant="contained" disabled>
        Continue
      </Button>
      <h1>Input checkbox</h1>
      <CheckboxLabels />
      <h1>Testing Modal</h1>
      <BasicModal />
      <h1>Input text</h1>
      <Input placeholder="Placeholder" inputProps={ariaLabel} />
      <h1>Input slider discrete</h1>
      <DiscreteSlider />
      <h1>Toggle Button</h1>
      <ToggleButtons />

      <h1>Testing accordion</h1>
      <AccordionUsage />

      <h1>Testing tabs</h1>
      <LabTabs />

      <h1>Testing table</h1>
      <BasicTable />

      <h1>Testing popover</h1>
      <MouseHoverPopover />
    </>
  );
}
