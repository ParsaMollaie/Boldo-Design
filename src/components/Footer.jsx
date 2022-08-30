import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import React from "react";

const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "cenetr",
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
  paddingLeft: "10rem",
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
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
    padding: "0",
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
        <MainGrid container spacing={4}>
          <Grid item xs={6} sm={4}>
            <Item
              sx={{
                color: "secondary.main",
                fontWeight: "fontWeightBold",
                fontSize: { xs: "12px", sm: "20px" },
              }}
            >
              Landings
            </Item>
          </Grid>
          <Grid item xs={5} sm={4}>
            <Item
              sx={{
                color: "secondary.main",
                fontWeight: "fontWeightBold",
                fontSize: { xs: "12px", sm: "20px" },
              }}
            >
              Company
            </Item>
          </Grid>
          <Grid item xs={5} sm={4}>
            <Item
              sx={{
                color: "secondary.main",
                fontWeight: "fontWeightBold",
                fontSize: { xs: "12px", sm: "20px" },
              }}
            >
              Recources
            </Item>
          </Grid>
          <Grid item xs={5} sm={4}>
            <Item
              sx={{ fontSize: { xs: "10px", sm: "15px" }, color: "info.main" }}
            >
              Home
            </Item>
          </Grid>
          <Grid item xs={5} sm={4}>
            <Item
              sx={{ fontSize: { xs: "10px", sm: "15px" }, color: "info.main" }}
            >
              Home
            </Item>
          </Grid>
          <Grid item xs={5} sm={4}>
            <Item
              sx={{ fontSize: { xs: "10px", sm: "15px" }, color: "info.main" }}
            >
              Blog
            </Item>
          </Grid>
          <Grid item xs={5} sm={4}>
            <Item
              sx={{ fontSize: { xs: "10px", sm: "15px" }, color: "info.main" }}
            >
              Products
            </Item>
          </Grid>
          <Grid item xs={5} sm={4}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Item
                sx={{
                  fontSize: { xs: "10px", sm: "15px" },
                  color: "info.main",
                }}
              >
                Careers
              </Item>
              <Item
                sx={{
                  marginLeft: "12px",
                  borderRadius: 30,
                  backgroundColor: "primary.main",
                  fontWeight: "fontWeightBold",
                  fontSize: { xs: "10px", sm: "13px" },
                  padding: "5px",
                }}
              >
                Hiring!
              </Item>
            </Box>
          </Grid>
          <Grid item xs={5} sm={4}>
            <Item
              sx={{ fontSize: { xs: "10px", sm: "15px" }, color: "info.main" }}
            >
              Products
            </Item>
          </Grid>
          <Grid item xs={5} sm={4}>
            <Item
              sx={{ fontSize: { xs: "10px", sm: "15px" }, color: "info.main" }}
            >
              Services
            </Item>
          </Grid>
          <Grid item xs={5} sm={4}>
            <Item
              sx={{ fontSize: { xs: "10px", sm: "15px" }, color: "info.main" }}
            >
              Services
            </Item>
          </Grid>
          <Grid item xs={5} sm={4}>
            <Item
              sx={{ fontSize: { xs: "10px", sm: "15px" }, color: "info.main" }}
            >
              Services
            </Item>
          </Grid>
        </MainGrid>
      </Box>
    </FlexBox>
  );
};

export default Footer;
