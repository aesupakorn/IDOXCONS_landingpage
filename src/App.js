import { Box, Divider, Stack, styled } from "@mui/material";
import Footer from "./components/Footer/Footer";
import FunctionIntroduce from "./components/FunctionIntroduce";

import Navbar from "./components/Navbar";

import VidBand from "./components/Vidband/VidBand";
import { BrowserRouter } from "react-router-dom";

import Introduction from "./components/IntroducePage/Introduction";

import FunctionCard from "./components/NewFuction/FunctionCard";


const NavDivider = styled(Divider)({
  margin: "10vh 0 0 0",
  border: "none",
});
function App() {
  return (
    <BrowserRouter>
      <Box>
        <Stack>
          <Navbar />
          <Introduction />
          {/* <NavDivider /> */}

          <VidBand />

          <FunctionIntroduce />

          <FunctionCard />

          <NavDivider />
          <NavDivider />
          <Footer />
        </Stack>
      </Box>
    </BrowserRouter>
  );
}

export default App;
