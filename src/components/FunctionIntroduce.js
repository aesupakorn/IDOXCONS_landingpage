import {
  Box,
  Container,
  Divider,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  List,
  ListItem,
  ListSubheader,
  Autocomplete,
  TextField,
  styled,
  Fade,
  Backdrop,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { funcInfo } from "../utils/FunctionInfo";
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTranslation } from "react-i18next";

const bgColor = "#036566";
const options = ["ISO9001", "ISO14001"];
const CustomListItemButton = styled(ListItemButton)({
  margin: "0.5rem",
  borderRadius: "6px",
  "&:focus": {
    backgroundColor: "rgba(31, 157, 166,0.3)",
    margin: "0.5rem",
    borderRadius: "6px",
  },
});

const Function = () => {
  const [value, setValue] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  const [openPreviewImage, setOpenPreviewImage] = useState(false);
  const [t, i18n] = useTranslation("global");

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const handleClose = () => {
    setOpenPreviewImage(false);
    document.body.style.overflow = "visible";
  };
  const handleCloseModal = () => {
    setSelectedIndex(null);
  };
  const handleToggle = (event) => {
    setOpenPreviewImage(true);
    setSelectedImg(event.target.src);
    document.body.style.overflow = "hidden";
  };

  let laptopSize = window.matchMedia("(min-width: 1024px)");

  return (
    <Container id="function" sx={{ mt: "20vh" }}>
      <Typography textAlign={"center"} variant="h4" mb={"5rem"} color="#404041">
        {t("FunctionInfo.Introduce")}
      </Typography>
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
          border: "2px solid #e8e8e8",
          borderRadius: "10px ",
        }}
      >
        {/* left content */}
        <Box
          sx={{
            width: "100%",
            // minHeight: 705,
            maxWidth: { mobile: "100vw", laptop: "360px" },
            bgcolor: "background.paper",
            borderRadius: "10px 0 0 10px",
          }}
        >
          <List
            component="nav"
            subheader={
              <ListSubheader
                sx={{
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  color: "#009BDD",
                }}
                component="div"
                id="nested-list-subheader"
              >
                <SettingsIcon />{" "}
                <Typography variant="h7">
                  {t("FunctionInfo.IDOXCONSFunctions")}
                </Typography>
              </ListSubheader>
            }
          >
            <ListItem>
              <Autocomplete
                onChange={(event, newVal) => {
                  setValue(newVal);
                  setSelectedIndex(null);
                }}
                options={Object.keys(
                  t("FunctionInfoText", { returnObjects: true })
                )}
                id="auto-complete"
                sx={{ width: "100%" }}
                disableClearable
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={t("FunctionInfo.SelectISOType")}
                    variant="standard"
                  />
                )}
              />
            </ListItem>
          </List>
          <Divider />

          <List
            component="nav"
            sx={{
              height: 400,
              overflowY: "scroll",
            }}
          >
            {value !== null &&
              t("FunctionInfoText", { returnObjects: true })[value].map(
                (element, index) => {
                  return (
                    <CustomListItemButton
                      sx={{ textAlign: "center" }}
                      key={index}
                      selected={selectedIndex === index}
                      onClick={(event) => handleListItemClick(event, index)}
                    >
                      <ListItemText primary={element.name} />
                    </CustomListItemButton>
                  );
                }
              )}
          </List>
        </Box>

        {/* right content */}
        <Stack>
          {selectedIndex !== null && (
            <Dialog
              sx={{ display: { mobile: "flex", laptop: "none" } }}
              fullScreen={true}
              open={selectedIndex !== null}
              onClose={handleCloseModal}
              aria-labelledby="responsive-dialog-title"
              disableScrollLock={laptopSize.matches}
            >
              <DialogTitle id="responsive-dialog-title">
                {
                  t("FunctionInfoText", { returnObjects: true })[value][
                    selectedIndex
                  ]["name"]
                }
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {
                    t("FunctionInfoText", { returnObjects: true })[value][
                      selectedIndex
                    ]["description"]
                  }
                </DialogContentText>

                <DialogContentText
                  sx={{
                    color: "black",
                    fontWeight: "500",
                    mt: "1rem",
                    mb: "0.5rem",
                    display: { mobile: "none", tablet: "block" },
                  }}
                >
                  {t("FunctionInfo.SampleImage")}
                </DialogContentText>
                <Stack sx={{ display: { mobile: "none", tablet: "block" } }}>
                  <Stack direction={"row"} sx={{ flexWrap: "wrap" }} gap={2}>
                    {funcInfo[value][selectedIndex]["imageList"].map(
                      (element, index) => {
                        return (
                          <Box
                            key={index}
                            component="img"
                            sx={{
                              width: "180px",
                              height: "90px",
                              cursor: "pointer",
                              borderRadius: "4px",
                              "&:hover": {
                                transform: "scale(1.05)",
                                transition: "all 0.1s linear",
                              },
                            }}
                            alt={element}
                            onClick={(event) => {
                              setOpenPreviewImage(true);
                              setSelectedImg(event.target.src);
                            }}
                            src={
                              "img/" +
                              funcInfo[value][selectedIndex]["imagePath"] +
                              element
                            }
                          ></Box>
                        );
                      }
                    )}

                    <Backdrop
                      sx={{
                        color: "#fff",
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                      }}
                      open={openPreviewImage}
                    >
                      <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                          zIndex: 1,
                          backgroundColor: "white",
                          position: "absolute",
                          top: "30px",
                          right: "30px",
                          "&:hover": {
                            backgroundColor: "white",
                          },
                        }}
                      >
                        <CloseIcon sx={{ color: "#1F9DA6" }} />
                      </IconButton>
                      <Box
                        component="img"
                        sx={{
                          transform: "scale(0.8)",
                          zIndex: 0,
                          position: "absolute",
                          width: "900px",
                        }}
                        alt="Function Preview Image"
                        onClick={handleToggle}
                        src={selectedImg}
                      ></Box>
                    </Backdrop>
                  </Stack>
                </Stack>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleCloseModal}>
                  {t("FunctionInfo.Exit")}
                </Button>
              </DialogActions>
            </Dialog>
          )}
        </Stack>

        <Stack
          sx={{
            width: "100%",
            // minHeight: 705,
            bgcolor: "#009BDD",
            borderRadius: "0 10px 10px 0",
            p: "2rem",
            justifyContent: "space-between",
            display: { mobile: "none", laptop: "flex" },
          }}
        >
          {selectedIndex !== null && (
            <>
              <Fade in={true}>
                <Stack gap={4}>
                  <Typography color={"white"} variant="h4">
                    {
                      t("FunctionInfoText", { returnObjects: true })[value][
                        selectedIndex
                      ]["name"]
                    }
                  </Typography>

                  <Typography color={"white"} variant="h6" fontWeight={300}>
                    {
                      t("FunctionInfoText", { returnObjects: true })[value][
                        selectedIndex
                      ]["description"]
                    }
                  </Typography>
                </Stack>
              </Fade>
              <Stack gap={1}>
                <Typography color={"white"}>
                  {t("FunctionInfo.SampleImage")}
                </Typography>
                <Stack direction={"row"} gap={2}>
                  {funcInfo[value][selectedIndex]["imageList"].map(
                    (element, index) => {
                      return (
                        <Box
                          key={index}
                          component="img"
                          sx={{
                            width: "180px",
                            height: "90px",
                            cursor: "pointer",
                            borderRadius: "4px",
                            "&:hover": {
                              transform: "scale(1.05)",
                              transition: "all 0.1s linear",
                            },
                          }}
                          alt={element}
                          onClick={(event) => {
                            handleToggle(event);
                          }}
                          src={
                            "img/" +
                            funcInfo[value][selectedIndex]["imagePath"] +
                            element
                          }
                        ></Box>
                      );
                    }
                  )}
                  <>
                    <Backdrop
                      sx={{
                        color: "#fff",
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                      }}
                      open={openPreviewImage}
                    >
                      <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                          zIndex: 1,
                          backgroundColor: "white",
                          position: "absolute",
                          top: "30px",
                          right: "30px",
                          "&:hover": {
                            backgroundColor: "white",
                          },
                        }}
                      >
                        <CloseIcon sx={{ color: "#1F9DA6" }} />
                      </IconButton>
                      <Box
                        component="img"
                        sx={{
                          transform: "scale(0.8)",
                          zIndex: 0,
                          position: "absolute",
                        }}
                        alt="Function Preview Image"
                        onClick={handleToggle}
                        src={selectedImg}
                      ></Box>
                    </Backdrop>
                  </>
                </Stack>
              </Stack>
            </>
          )}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Function;
