import React from "react";
import { Box, IconButton, Stack, Typography, Link } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useTranslation } from "react-i18next";
const LeftFooter = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <Stack
      direction={"column"}
      gap={2}
      sx={{ alignItems: { mobile: "center", laptop: "start" } }}
    >
      <Stack gap={1} sx={{ alignItems: { mobile: "center", laptop: "start" } }}>
        <Typography variant="h6" fontWeight={500}>
          {t("Footer.CentralContract")}
        </Typography>
        <Typography variant="h6" fontWeight={300}>
          {t("Footer.Tel")} 02-9218683 , 061-7461221 , 061-0819366
        </Typography>
        <Typography variant="h6" fontWeight={300}>
          {t("Footer.Email")} admin@imapasia.com
        </Typography>
        <Typography variant="h6" fontWeight={300}>
          {t("Footer.BusinessHours")} {t("Footer.Monday")} -{" "}
          {t("Footer.Saturday")} 08.00-17.00 น.
        </Typography>
      </Stack>
      <Stack direction={"row"} gap={2} sx={{ flexWrap: "wrap" }}>
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
            <Link
              rel="noreferrer"
              href="https://www.youtube.com/@idoxcons6404"
              target="_blank"
            >
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
            </Link>
            <Link
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100089872042236"
              target="_blank"
            >
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
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LeftFooter;
