import {
  Box,
  Container,
  Divider,
  ListItemButton,
  ListItemText,
  Skeleton,
  Stack,
  Typography,
  List,
  ListItem,
  ListSubheader,
  Autocomplete,
  TextField,
  styled,
  Grow,
  Fade,
  Backdrop,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { funcInfo } from "../utils/FunctionInfo";

import SettingsIcon from "@mui/icons-material/Settings";

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
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const handleClose = () => {
    setOpenPreviewImage(false);
    document.body.style.overflow = "visible";
  };
  const handleToggle = (event) => {
    setOpenPreviewImage(!openPreviewImage);
    setSelectedImg(event.target.src);
    document.body.style.overflow = "hidden";
  };

  return (
    <Container sx={{ mt: "20vh" }}>
      <Typography textAlign={"center"} variant="h4" mb={"5rem"} color="#404041">
        แนะนำฟังก์ชันของ IDOXCONS
      </Typography>
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
          border: "2px solid #e8e8e8",
          borderRadius: "10px ",
        }}
      >
        <Box
          sx={{
            width: "100%",
            // minHeight: 705,
            maxWidth: 360,
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
                <Typography variant="h7">ฟังก์ชันของ IDOXCONS</Typography>
              </ListSubheader>
            }
          >
            <ListItem>
              <Autocomplete
                onChange={(event, newVal) => {
                  setValue(newVal);
                  setSelectedIndex(null);
                }}
                options={options}
                id="auto-complete"
                sx={{ width: "100%" }}
                disableClearable
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="เลือกหมวดหมู่ ISO"
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
              funcInfo[value].map((element, index) => {
                return (
                  <CustomListItemButton
                    key={index}
                    selected={selectedIndex === index}
                    onClick={(event) => handleListItemClick(event, index)}
                  >
                    <ListItemText primary={element.name} />
                  </CustomListItemButton>
                );
              })}
          </List>
        </Box>

        <Stack
          sx={{
            width: "100%",
            // minHeight: 705,
            bgcolor: "#009BDD",
            borderRadius: "0 10px 10px 0",
            p: "2rem",
            justifyContent: "space-between",
          }}
        >
          {selectedIndex !== null && (
            <>
              <Fade in={true}>
                <Stack gap={4}>
                  <Typography color={"white"} variant="h4">
                    {funcInfo[value][selectedIndex]["name"]}
                  </Typography>

                  <Typography color={"white"} variant="h6" fontWeight={300}>
                    {funcInfo[value][selectedIndex]["description"]}
                  </Typography>
                </Stack>
              </Fade>
              <Stack gap={1}>
                <Typography color={"white"}>รูปภาพตัวอย่างฟังก์ชัน</Typography>
                <Stack direction={"row"} gap={2}>
                  {funcInfo[value][selectedIndex]["imageList"].map(
                    (element, index) => {
                      return (
                        <>
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
                        </>
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
                      onClick={handleClose}
                    >
                      <Box
                        component="img"
                        sx={{
                          transform: "scale(0.8)",
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
