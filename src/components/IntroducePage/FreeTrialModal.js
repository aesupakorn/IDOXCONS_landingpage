import React, { useState } from "react";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import validator from "validator";

// const nodeMailer = require("nodemailer");

const SendMailDialog = () => {
  const [t, i18n] = useTranslation("global");
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    PersonalName: "",
    PersonalLastName: "",
    Email: "",
    Tel: "",
    OrganizationName: "",
    BusinessType: "",
    ISO: "",
  });

  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({
    PersonalName: false,
    PersonalLastName: false,
    Email: false,
    Tel: false,
    OrganizationName: false,
    BusinessType: false,
    ISO: false,
  });
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("tablet"));

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      [name]: false,
    }));
  };

  const handleSend = () => {
    let hasErrors = false;

    // Validate form fields
    const errors = {};
    Object.keys(formData).forEach((fieldName) => {
      if (formData[fieldName].trim() === "") {
        errors[fieldName] = true;
        hasErrors = true;
      }
    });
    // Validate email field
    if (formData.Email.trim() !== "" && !validator.isEmail(formData.Email)) {
      errors.Email = true;
      hasErrors = true;
    }

    setFormErrors(errors);

    console.log(errors);

    if (!hasErrors) {
      // Logic to send the mail
      console.log("Sending Completed");

      setFormData({
        PersonalName: "",
        PersonalLastName: "",
        Email: "",
        Tel: "",
        OrganizationName: "",
        BusinessType: "",
        ISO: "",
      });

      handleClose();
      setSuccessSnackbarOpen(true);
    }
  };
  const handleSnackbarClose = () => {
    setSuccessSnackbarOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="third"
        sx={{ color: "#ffffff", width: "100%" }}
        onClick={handleClickOpen}
      >
        <Typography variant="h5">{t("Introduce.FreeTrial")}</Typography>
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="send-mail-dialog-title"
      >
        <DialogTitle id="send-mail-dialog-title">
          {t("FreeTrialModal.Trial")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <InfoOutlinedIcon />
            {t("FreeTrialModal.PersonalInfo")}
          </DialogContentText>
          {["PersonalName", "PersonalLastName", "Email", "Tel"].map((name) => (
            <TextField
              key={name}
              autoFocus={name === "Email"}
              margin="dense"
              id={name}
              name={name}
              label={t("FreeTrialModal", { returnObjects: true })[name]}
              type={name === "Email" ? "email" : "text"}
              fullWidth
              value={formData[name]}
              onChange={handleInputChange}
              error={formErrors[name]}
              helperText={
                formErrors[name]
                  ? name === "Email"
                    ? "Please enter a valid email"
                    : `${t("Validation.PleaseEnter")} ${
                        t("FreeTrialModal", { returnObjects: true })[name]
                      }`
                  : ""
              }
            />
          ))}

          <br />
          <br />

          <DialogContentText
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <InfoOutlinedIcon />
            {t("FreeTrialModal.OrganizationInfo")}
          </DialogContentText>
          {["OrganizationName", "BusinessType", "ISO"].map((name) => (
            <TextField
              key={name}
              margin="dense"
              id={name}
              name={name}
              label={t("FreeTrialModal", { returnObjects: true })[name]}
              type="text"
              fullWidth
              value={formData[name]}
              onChange={handleInputChange}
              error={formErrors[name]}
              helperText={
                formErrors[name]
                  ? `${t("Validation.PleaseEnter")} ${
                      t("FreeTrialModal", { returnObjects: true })[name]
                    }`
                  : ""
              }
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            ยกเลิก
          </Button>
          <Button onClick={handleSend} color="primary">
            ยืนยัน
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={successSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {t("Validation.SendingSuccess")}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SendMailDialog;
