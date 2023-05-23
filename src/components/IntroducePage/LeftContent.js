import { Typography, styled, Stack} from "@mui/material";

import React from "react";
import FreeTrialModal from "./FreeTrialModal";
import { useTranslation } from "react-i18next";
const TextTypography = styled(Typography)({
  color: "#404041",
});
const LeftContent = () => {
  const [t, i18n] = useTranslation('global');
  return (
    <Stack gap={2}  sx={{}}>
      <TextTypography variant='h3' textAlign="start" fontWeight={400} sx={{textAlign:{xs:'center',lg:'start'}}}>
        {t('Introduce.LeftTitleTop')}
        <br />
        {t('Introduce.LeftTitleMiddle')}
        <br />
        {t('Introduce.LeftTitleBottom')} <span style={{ color: "#009BDD" }}>I</span>
        <span style={{ color: "#9EC21D" }}>DOXCONS</span>
      </TextTypography>

      <TextTypography variant="h6" fontWeight="300"  sx={{textAlign:{xs:'center',lg:'start'}}}>
        {t('Introduce.LeftDescription')}{" "}
      </TextTypography>

      <FreeTrialModal />
    </Stack>
  );
};

export default LeftContent;
