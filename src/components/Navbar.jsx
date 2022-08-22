import React from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Button,
  Link,
  Typography,
} from "@mui/material";
import { shape } from "@mui/system";
import { common } from "@mui/material/colors";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 !important",
  paddingBottom: "2rem !important",
});

const MyNav = styled(AppBar)({
  padding: "2rem 4rem 7rem 4rem",
  width: "100%",
  position: "relative",
});

const Section1 = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "9rem",
});

const Navbar = () => {
  return (
    <MyNav>
      <StyledToolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",

            "&:hover": { cursor: "pointer" },
          }}
        >
          <FormatBoldIcon
            sx={{ display: { xs: "block", sm: "none" } }}
            fontSize="large"
          />
          <Link
            color="secondary"
            underline="none"
            fontSize="large"
            sx={{
              display: { xs: "none", sm: "block" },
              fontWeight: "fontWeightBold",
              fontSize: "40px",
            }}
          >
            Boldo
          </Link>
        </Box>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Button variant="text" color="secondary">
            Product
          </Button>
          <Button variant="text" color="secondary">
            Services
          </Button>
          <Button variant="text" color="secondary">
            About
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              borderRadius: shape.borderRadius,
              padding: "8px 35px",
              border: "2px solid",
              "&:hover": { border: "2px solid" },
            }}
          >
            Log In
          </Button>
        </Box>
      </StyledToolbar>
      <Section1>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography color={common} sx={{ paddingTop: "20px" }}>
            About
          </Typography>
          <Typography
            color="secondary"
            sx={{ fontSize: "50px", fontWeight: "fontWeightRegular" }}
          >
            We love to make greate things, things that matter.
          </Typography>
        </Box>
        <Box color={common}>
          Funding handshake buyer business-to-business metrics ipad parentship.
          first mover advantage innovator success deployment non-disclosure.
        </Box>
      </Section1>
    </MyNav>
  );
};

export default Navbar;
