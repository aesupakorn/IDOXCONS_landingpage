import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";

import React, { useState } from "react";

import CheckIcon from "@mui/icons-material/Check";
import { VidInfo } from "../utils/VidInfo";

const TextTypography = styled(Typography)({
  color: "#404041",
});
const VidBand = () => {
  const [openVid, setOpenVid] = useState(false);

  return (
    <Container sx={{ mt: "10vh" }}>
      <Paper
        elevation={0}
        sx={{ backgroundColor: "transparent", borderRadius: "0px" }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            height: 500,
            width: "100%",
            margin: "auto",
          }}
        >
          <Stack
            direction="column"
            // justifyContent="space-between"
            alignItems="s"
            gap={4}
          >
            <Typography variant="h6" color="primary.light">
              วิดีโอแนะนำ
            </Typography>
            <Stack gap={2}>
              <TextTypography variant="h5" fontWeight={500}>
                ทำไมเราถึงต้องใช้ IDOXCONS
              </TextTypography>
              <Box fontSize={16} fontWeight="300" color="#404041">
                <ul style={{ listStyleType: "none" }}>
                  {VidInfo.map((element, index) => {
                    return (
                      <li key={index}>
                        <CheckIcon color="primary" /> {element.description}
                      </li>
                    );
                  })}
                </ul>
              </Box>
            </Stack>

            <Button
              variant="contained"
              onClick={() => {
                setOpenVid(true);
              }}
              color="primary"
              size="large"
            >
              <Typography color={"white"}>ดูคลิปวิดีโอ</Typography>{" "}
            </Button>
          </Stack>
          <Box>
            {openVid && (
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/iNgCyiKJVN0?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                autoplay
              ></iframe>
            )}
            {!openVid && (
              <Box
                sx={{
                  width: 560,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 520,
                    margin: "auto",
                    borderRadius: "10px",
                  }}
                  alt="Idoxcons Logo"
                  src={"img/Cover.png"}
                ></Box>
              </Box>
            )}
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};

export default VidBand;
