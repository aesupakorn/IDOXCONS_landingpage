import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Backdrop,
  Box,
  Button,
  Divider,
  Fade,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Stack } from "@mui/system";
import { useTranslation } from "react-i18next";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const FreeTrialModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openAccordion, setOpenAccordion] = useState([true, true]);
  const [t, i18n] = useTranslation('global');

  useEffect(() => {
    if (!open) {
      setOpenAccordion([true, true]);
    }
  }, [open]);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="third"
        sx={{ color: "#ffffff" }}
      >
        <Typography variant="h5">{t("Introduce.FreeTrial")}</Typography>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Stack
            gap={0}
            direction={"column"}
            sx={style}
            justifyContent={"center"}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                color="#404041"
              >
                ทดลองใช้งาน
              </Typography>
              <IconButton
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Stack>
            <Divider />
            <Accordion
              expanded={openAccordion[0]}
              onChange={() => {
                setOpenAccordion([!openAccordion[0], openAccordion[1]]);
              }}
              sx={{
                borderRadius: "0px",
                boxShadow: "none",
                margin: "0px !important",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Stack direction={"row"} gap={1}>
                  <InfoOutlinedIcon />
                  <Typography>ข้อมูลส่วนบุคคล</Typography>
                </Stack>
              </AccordionSummary>

              <AccordionDetails>
                <Stack direction={"column"} gap={2}>
                  <TextField label="ชื่อ" size="small" fullWidth />
                  <TextField label="นามสกุล" size="small" fullWidth />
                  <TextField label="อีเมล" size="small" fullWidth />
                  <TextField label="เบอร์โทร" size="small" fullWidth />
                </Stack>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={openAccordion[1]}
              onChange={() => {
                setOpenAccordion([openAccordion[0], !openAccordion[1]]);
              }}
              sx={{
                borderRadius: "0px",
                boxShadow: "none",
                margin: "0px !important",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Stack direction={"row"} gap={1}>
                  <InfoOutlinedIcon />
                  <Typography>ข้อมูลองกรค์ / บริษัท</Typography>
                </Stack>
              </AccordionSummary>

              <AccordionDetails>
                <Stack direction={"column"} gap={2}>
                  <TextField
                    label="ชื่อองกรค์/ชื่อบริษัท"
                    size="small"
                    fullWidth
                  />

                  <TextField label="ประเภทธุรกิจ" size="small" fullWidth />
                  <TextField label="มาตรฐาน ISO" size="small" fullWidth />
                </Stack>
              </AccordionDetails>
            </Accordion>

            <Divider />
            <Button
              variant="contained"
              size="medium"
              sx={{ mt: "1rem", width: "30%", mr: "auto", ml: "auto" }}
            >
              <Typography>ยืนยัน</Typography>
            </Button>
          </Stack>
        </Fade>
      </Modal>
    </>
  );
};

export default FreeTrialModal;
