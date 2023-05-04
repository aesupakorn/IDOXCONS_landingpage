import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const RightFooter = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <Stack gap={1} sx={{ alignItems: { mobile: "center", laptop: "start" } }}>
      <Typography variant="h5" fontWeight={500}>
        {t("Footer.SalesDepartmentContact")}
      </Typography>
      <Typography variant="h6" fontWeight={300}>
        {t("Footer.Tel")} 099-108-1667
      </Typography>
      <Typography variant="h6" fontWeight={300}>
        {t("Footer.Email")} teerapan.j@imapasia.com
      </Typography>
      <Typography variant="h6" fontWeight={300}>
        {t("Footer.BusinessHours")} {t("Footer.EveryDay")} 09.00-20.00 น.
      </Typography>
      <br />
      <Typography variant="h5" fontWeight={500}>
        {t("Footer.Addr")}
      </Typography>
      <Typography variant="h6" fontWeight={300}>
        99/75 หมู่ 5 ต.ไทรม้า อ.เมือง จ.นนทบุรี 11000
      </Typography>
    </Stack>
  );
};

export default RightFooter;
