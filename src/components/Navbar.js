import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Button,
  Stack,
  Typography,
  Container,
  Divider,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Drawer,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";

const defaultNav = {
  backgroundColor: "transparent",
  boxShadow: "none",
  width: "100vw",
  height: "10vh",
  zIndex: 10,
  justifyContent: "center",
};
const activeNav = {
  backgroundColor: "white",
  boxShadow: "0px 3px 4px 0px rgba(166,166,166,0.33)",
  width: "100vw",
  height: "10vh",
  zIndex: 10,
  justifyContent: "center",
};
const LogInBtn = styled(Button)({});

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navOnScroll, setNavOnScroll] = useState(false);
  useEffect(() => {
    changeToActiveNav();
    window.addEventListener("scroll", changeToActiveNav);
  });

  const [t, i18n] = useTranslation("global");

  const changeToActiveNav = () => {
    if (window.scrollY > 0) {
      setNavOnScroll(true);
    } else {
      setNavOnScroll(false);
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const pages = [t("Nav.AboutUs"), t("Nav.Function"), t("Nav.NewArrival")];
  const idPages = ["about-us", "function", "new-arrival"];
  const offsetPages = [-160, -160, -160];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <LogInBtn
          variant="contained"
          color="primary"
          startIcon={<AccountCircleIcon sx={{ color: "white" }} />}
        >
          <Link href="https://www.idoxcons.com/login">
            <Typography fontWeight={300} color={"white"}>
              {t("Nav.SignIn")}
            </Typography>
          </Link>
        </LogInBtn>
      </Typography>
      <Divider />
      <List>
        {pages.map((item, index) => (
          <ListItem
            key={item}
            disablePadding
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ScrollLink
              to={idPages[index]}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ScrollLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      style={{ transition: "all 0.5s" }}
      sx={navOnScroll ? activeNav : defaultNav}
    >
      <Container>
        <Toolbar disableGutters>
          <Button>
            <ScrollLink
              to={"home"}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Box
                component="img"
                sx={{
                  height: { mobile: 60, tablet: 80 },
                }}
                alt="Idoxcons Logo"
                src={"img/logo.png"}
              ></Box>
            </ScrollLink>
          </Button>

          {/* responsive on mobile */}
          <Box sx={{ display: { mobile: "flex", laptop: "none" }, ml: "auto" }}>
            <IconButton
              size="small"
              onClick={() => {
                i18n.changeLanguage("th");
              }}
            >
              TH
            </IconButton>
            <Divider orientation="vertical" color={"#d1d1d1"} flexItem />
            <IconButton
              size="small"
              onClick={() => {
                i18n.changeLanguage("en");
              }}
            >
              EN
            </IconButton>

            <IconButton aria-label="open drawer" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Box component="nav">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { mobile: "flex", laptop: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: { xs: 250, sm: 300 },
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          <Stack
            direction="row"
            justifyContent="end"
            alignItems="center"
            gap={3}
            sx={{
              width: "max-content",
              ml: "auto",
              display: { mobile: "none", laptop: "flex" },
            }}
          >
            <Box>
              {pages.map((page, index) => (
                <ScrollLink
                  to={idPages[index]}
                  spy={true}
                  smooth={true}
                  offset={offsetPages[index]}
                  duration={500}
                  key={page}
                >
                  <Button
                    sx={{
                      color: "#404041",
                      fontWeight: "300",

                      fontSize: 15,
                    }}
                  >
                    {page}
                  </Button>
                </ScrollLink>
              ))}
            </Box>
            <Divider orientation="vertical" color={"#d1d1d1"} flexItem />

            <LogInBtn
              variant="contained"
              color="primary"
              startIcon={<AccountCircleIcon sx={{ color: "white" }} />}
            >
              <Link href="https://www.idoxcons.com/login">
                <Typography fontWeight={300} color={"white"}>
                  {t("Nav.SignIn")}
                </Typography>
              </Link>
            </LogInBtn>
            <Stack
              direction={"row"}
              sx={{
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <IconButton
                size="small"
                onClick={() => {
                  i18n.changeLanguage("th");
                }}
              >
                TH
              </IconButton>
              <Divider orientation="vertical" color={"#d1d1d1"} flexItem />
              <IconButton
                size="small"
                onClick={() => {
                  i18n.changeLanguage("en");
                }}
              >
                EN
              </IconButton>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
