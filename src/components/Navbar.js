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
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import React, { useState, useEffect } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
});
const defaultNav = {
  backgroundColor: "transparent",
  boxShadow: "none",
  width: "100%",
  height: "10vh",
  zIndex: 10,
  justifyContent: "center",
};
const activeNav = {
  backgroundColor: "white",
  boxShadow: "0px 3px 4px 0px rgba(166,166,166,0.33)",
  width: "100%",
  height: "10vh",
  zIndex: 10,
  justifyContent: "center",
};
const LogInBtn = styled(Button)({});
const pages = ["เกี่ยวกับเรา", "ฟังก์ชันการใช้งาน", "คำถามที่พบบ่อย"];

const Navbar = () => {
  const [navOnScroll, setNavOnScroll] = useState(false);
  const changeToActiveNav = () => {
    if (window.scrollY > 0) {
      setNavOnScroll(true);
    } else {
      setNavOnScroll(false);
    }
  };
  useEffect(() => {
    changeToActiveNav();
    window.addEventListener("scroll", changeToActiveNav);
  });

  return (
    <AppBar
      position="sticky"
      style={{ transition: "all 0.5s" }}
      sx={navOnScroll ? activeNav : defaultNav}
    >
      <Container>
        <StyledToolbar>
          <Box
            component="img"
            sx={{
              height: 80,
            }}
            alt="Idoxcons Logo"
            src={"img/logo.png"}
          ></Box>

          <Stack
            direction="row"
            justifyContent="end"
            alignItems="center"
            gap={3}
            sx={{ width: "100%" }}
          >
            <Box>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    color: "#404041",
                    fontWeight: "300",
                    borderRadius: "0px",
                    fontSize: 15,
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Divider orientation="vertical" color={"#d1d1d1"} flexItem />

            <LogInBtn
              variant="contained"
              color="primary"
              startIcon={<AccountCircleIcon style={{ color: "white" }} />}
            >
              <Link href="https://www.idoxcons.com/login">
                <Typography fontWeight={300} color={"white"}>
                  เข้าสู่ระบบ
                </Typography>
              </Link>
            </LogInBtn>
          </Stack>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
