import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import React from "react";

const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "7rem",
  marginBottom: "5rem",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem",
  },
}));

const LeftBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  textAlign: "left",
  paddingRight: "5rem",
  // paddingLeft: "10rem",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly !important",
    padding: "2rem",
  },
}));

const MainGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    margin: "0",
    padding: "2rem",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "10rem",
  },
  [theme.breakpoints.down("sm")]: {
    // display: "none",
    padding: "0",
    // paddingLeft: "1rem",
  },
}));

const Item = styled(Box)({
  textAlign: "left",
});

const Footer = () => {
  return (
    <FlexBox>
      <LeftBox>
        <FormatBoldIcon
          sx={{
            display: { xs: "block", sm: "none" },
            "&:hover": { cursor: "pointer" },
          }}
          fontSize="large"
        />
        <Typography
          sx={{
            fontWeight: "fontWeightBold",
            fontSize: "40px",
            color: "secondary.main",
            display: { xs: "none", sm: "block" },
          }}
        >
          Boldo
        </Typography>
        <Box>
          <Typography sx={{ width: "50%", color: "info.main" }}>
            Social media validation business model canvsa graphical user
            interface launch party creative facebook ipad twitter.
          </Typography>
        </Box>
        <Typography sx={{ color: "info.main", marginTop: "3rem" }}>
          All rights reserved.
        </Typography>
      </LeftBox>
      <Box>
        <MainGrid container spacing={{ xs: 1, md: 12 }}>
          <Grid item xs={12} md={4}>
            <Item
              sx={{
                color: "secondary.main",
                fontSize: { xs: "12px", sm: "20px" },
              }}
            >
              <ul style={{ listStyle: "none", display: "grid", gap: "40px" }}>
                <li>
                  <strong>Landings</strong>
                </li>
                <li
                  style={{
                    color: "#777777",
                    fontSize: "20px",
                    fontWeight: "300",
                  }}
                >
                  Home
                </li>
                <li
                  style={{
                    color: "#777777",
                    fontSize: "20px",
                    fontWeight: "300",
                  }}
                >
                  Products
                </li>
                <li
                  style={{
                    color: "#777777",
                    fontSize: "20px",
                    fontWeight: "300",
                  }}
                >
                  Services
                </li>
              </ul>
            </Item>
          </Grid>{" "}
          <Grid item xs={12} md={4}>
            <Item
              sx={{
                color: "secondary.main",
                fontSize: { xs: "12px", sm: "20px" },
              }}
            >
              <ul style={{ listStyle: "none", display: "grid", gap: "40px" }}>
                <li>
                  <strong>Landings</strong>
                </li>
                <li
                  style={{
                    color: "#777777",
                    fontSize: "20px",
                    fontWeight: "300",
                  }}
                >
                  Home
                </li>
                <Box sx={{ display: "flex" }}>
                  <li
                    style={{
                      color: "#777777",
                      fontSize: "20px",
                      fontWeight: "300",
                    }}
                  >
                    Products
                  </li>
                  <Typography
                    sx={{
                      color: "secondary.main",
                      fontSize: "13px",
                      fontWeight: "fontWeightBold",
                      marginLeft: "12px",
                      borderRadius: 30,
                      backgroundColor: "primary.main",
                      padding: "5px",
                      display: { sm: "block", xs: "none" },
                    }}
                  >
                    Hiring!
                  </Typography>
                </Box>
                <li
                  style={{
                    color: "#777777",
                    fontSize: "20px",
                    fontWeight: "300",
                  }}
                >
                  Services
                </li>
              </ul>
            </Item>
          </Grid>{" "}
          <Grid item xs={12} md={4}>
            <Item
              sx={{
                color: "secondary.main",
                fontSize: { xs: "12px", sm: "20px" },
              }}
            >
              <ul style={{ listStyle: "none", display: "grid", gap: "40px" }}>
                <li>
                  <strong>Landings</strong>
                </li>
                <li
                  style={{
                    color: "#777777",
                    fontSize: "20px",
                    fontWeight: "300",
                  }}
                >
                  Home
                </li>
                <li
                  style={{
                    color: "#777777",
                    fontSize: "20px",
                    fontWeight: "300",
                  }}
                >
                  Products
                </li>
                <li
                  style={{
                    color: "#777777",
                    fontSize: "20px",
                    fontWeight: "300",
                  }}
                >
                  Services
                </li>
              </ul>
            </Item>
          </Grid>
        </MainGrid>
      </Box>
    </FlexBox>
  );
};

export default Footer;
