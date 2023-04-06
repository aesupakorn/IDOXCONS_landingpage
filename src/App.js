import { Box, Divider, Stack, styled } from "@mui/material";
import Footer from "./components/Footer/Footer";
import FunctionIntroduce from "./components/FunctionIntroduce";

import Navbar from "./components/Navbar";
import QA from "./components/QA";
import VidBand from "./components/Vidband/VidBand";
import { BrowserRouter } from "react-router-dom";
import Test from "./components/Test";
import Introduction from "./components/IntroducePage/Introduction";
import Customer from "./components/IntroducePage/Customer";
import FunctionCard from "./components/NewFuction/FunctionCard";

const PageDivider = styled(Divider)({
  margin: "9rem 0 0rem 0",
  border: "none",
});
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
          <NavDivider />

          <VidBand />

          <FunctionIntroduce />

          <FunctionCard />

          {/* <QA /> */}
          <NavDivider />
          <Footer />
        </Stack>
      </Box>
    </BrowserRouter>
  );
}

export default App;
