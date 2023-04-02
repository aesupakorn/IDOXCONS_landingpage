import { Typography, styled, Stack, Button } from "@mui/material";

import React from "react";
import FreeTrialModal from "./FreeTrialModal";
const TextTypography = styled(Typography)({
  color: "#404041",
});
const LeftContent = () => {
  return (
    <Stack gap={2} sx={{}}>
      <TextTypography variant="h3" textAlign="start" fontWeight={400}>
        แพลตฟอร์ม ISO Online
        <br />
        ทำระบบ ISO ไร้กระดาษ
        <br />
        ด้วย <span style={{ color: "#009BDD" }}>i</span>
        <span style={{ color: "#9EC21D" }}>Doxcons</span>
      </TextTypography>
      <TextTypography variant="h6" fontWeight="300" textAlign="start">
        ระบบบริหารจัดการเอกสารอย่างมืออาชีพ
        รวมถึงระบบซอฟต์แวร์ที่ทันสมัยมีความปลอดภัยในการดูแล
        สามารถตรวจสอบข้อมูลได้ตลอดเวลา โดยใช้ระบบ Cloud server{" "}
      </TextTypography>

      <FreeTrialModal />
    </Stack>
  );
};

export default LeftContent;
