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
import { VidInfo } from "../../utils/VidInfo";

const TextTypography = styled(Typography)({
  color:"#FFFFFF"
});
const VidBand = () => {
  const [openVid, setOpenVid] = useState(false);

  return (

      <Paper
        elevation={0}
        sx={{height:'', backgroundColor: "#599FDF", borderRadius: "0px",width:'100%',p:'2rem',mt:'10vh'}}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor:'',
            height: 'max-content',
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
            <Typography variant="h6" color="#FFFFFF">
              วิดีโอแนะนำ
            </Typography>
            <Stack gap={2}>
              <TextTypography variant="h5"  fontWeight={500}>
                ทำไมเราถึงต้องใช้ IDOXCONS
              </TextTypography>
              <Box fontSize={18} fontWeight="300" color="#FFFFFF">
                <ul style={{ listStyleType: "none" }}>
                  {VidInfo.map((element, index) => {
                    return (
                      <li key={index}>
                        <CheckIcon  /> {element.description}
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
                height="360"
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

  );
};

export default VidBand;
