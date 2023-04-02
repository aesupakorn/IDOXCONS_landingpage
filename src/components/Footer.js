import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Stack
        p={10}
        px={20}
        bgcolor={"#404041"}
        color="white"
        direction={"row"}
        justifyContent="space-between"
      >
        <Stack direction={"column"} gap={2}>
          <Stack gap={1}>
            <Typography variant="h6" fontWeight={500}>
              ติดต่อส่วนกลาง
            </Typography>
            <Typography variant="h6" fontWeight={300}>
              โทร 02-9218683 , 061-7461221 , 061-0819366
            </Typography>
            <Typography variant="h6" fontWeight={300}>
              อีเมล admin@imapasia.com
            </Typography>
            <Typography variant="h6" fontWeight={300}>
              เวลาทำการ จันทร์ - เสาร์ 08.00-17.00 น.
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={2}>
            <Stack
              direction={"column"}
              justifyContent="center"
              alignItems="center"
              gap={1}
            >
              <Typography variant="h6" fontWeight={400}>
                Line @idoxcons
              </Typography>
              <Box
                component="img"
                alt="Idoxcons Logo"
                src={"img/lineadd.png"}
              ></Box>
            </Stack>
            <Stack direction={"column"} gap={1}>
              <Typography variant="h6" fontWeight={400}>
                Social Media
              </Typography>
              <Stack direction={"row"} justifyContent="center" gap={0}>
                <IconButton component="label">
                  <YouTubeIcon
                    fontSize="large"
                    sx={{
                      color: "white",
                      bgcolor: "red",
                      height: 40,
                      width: 40,
                      borderRadius: "4px",
                    }}
                  />
                </IconButton>
                <IconButton component="label">
                  <FacebookIcon
                    fontSize="large"
                    sx={{
                      color: "white",
                      bgcolor: "#1877F2",
                      height: 40,
                      width: 40,
                      borderRadius: "4px",
                    }}
                  />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack gap={1}>
          <Typography variant="h5" fontWeight={500}>
            ติดต่อฝ่ายขาย
          </Typography>
          <Typography variant="h6" fontWeight={300}>
            โทร 099-108-1667
          </Typography>
          <Typography variant="h6" fontWeight={300}>
            อีเมล teerapan.j@imapasia.com
          </Typography>
          <Typography variant="h6" fontWeight={300}>
            เวลาทำการ ทุกวัน 09.00-20.00 น.
          </Typography>
          <br />
          <Typography variant="h5" fontWeight={500}>
            ที่อยู่
          </Typography>
          <Typography variant="h6" fontWeight={300}>
            99/75 หมู่ 5 ต.ไทรม้า อ.เมือง จ.นนทบุรี 11000
          </Typography>
        </Stack>
      </Stack>

      {/* <Box component='img' sx={{}} alt='Footer' src={'img/footer.png'}></Box> */}
    </>
  );
};

export default Footer;
