import {
  Box,
  Button,
  Container,
  Grow,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import Customer from "./Customer";
import Circle from "./Circle";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Introduction = () => {
  return (
    <Container sx={{}}>
      <Circle />
      <Stack
        direction="column"
        sx={{ height: "90vh" }}
        justifyContent="center"
        gap={10}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <LeftContent />

          <RightContent />
        </Stack>
      </Stack>
      <Box zIndex={0}>
        <Customer />
      </Box>
    </Container>
  );
};

export default Introduction;
