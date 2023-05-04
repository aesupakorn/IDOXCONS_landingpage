import { Box } from "@mui/material";
import React from "react";

const Circle = () => {
  const circleColor = "#599FDF";
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        left: "0",
        top: {tablet:'-680px',mobile:'-480px',laptop:'0'},
        overflowX: "hidden",
        position: "absolute",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          backgroundColor: circleColor,
          height: "90vh",
          width: "90vh",
          borderRadius: "50%",
          left: "75%",
          top: "1vh",
          zIndex: 2,
        }}
      ></Box>

      <Box
        sx={{
          position: "absolute",
          backgroundColor: "transparent",
          border: "1px solid",
          borderColor: circleColor,
          height: "90vh",
          width: "90vh",
          borderRadius: "50%",
          left: "72%",
          top: "1vh",
          zIndex: 1,
        }}
      ></Box>
    </Box>
  );
};

export default Circle;
