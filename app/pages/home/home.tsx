import Button from "@mui/material/Button";
import TopBar from "~/components/topbar";

export default function Home() {
  return (
    <>
      <TopBar />
      <p>THIS IS HOME PAGE</p>
      <Button variant="contained">Hello world</Button>
    </>
  );
}
