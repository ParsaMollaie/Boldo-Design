import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "cenetr",
  marginTop: "8rem",
  marginBottom: "5rem",
  width: "100%",
});

const LeftBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  textAlign: "left",
  paddingLeft: "10rem",
});

const Item = styled(Box)({
  textAlign: "left",
});

const Footer = () => {
  return (
    <FlexBox>
      <LeftBox>
        <Typography
          sx={{ fontWeight: "700", fontSize: "40px", color: "secondary.main" }}
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
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Item
              sx={{
                color: "secondary.main",
                fontWeight: "fontWeightBold",
                fontSize: "20px",
              }}
            >
              Landings
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item
              sx={{
                color: "secondary.main",
                fontWeight: "fontWeightBold",
                fontSize: "20px",
              }}
            >
              Company
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item
              sx={{
                color: "secondary.main",
                fontWeight: "fontWeightBold",
                fontSize: "20px",
              }}
            >
              Recources
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ color: "info.main" }}>Home</Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ color: "info.main" }}>Home</Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ color: "info.main" }}>Blog</Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ color: "info.main" }}>Products</Item>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Item sx={{ color: "info.main" }}>Careers</Item>
              <Item
                sx={{
                  marginLeft: "12px",
                  borderRadius: 30,
                  backgroundColor: "primary.main",
                  fontWeight: "fontWeightBold",
                  fontSize: "13px",
                  padding: "5px",
                }}
              >
                Hiring!
              </Item>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ color: "info.main" }}>Products</Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ color: "info.main" }}>Services</Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ color: "info.main" }}>Services</Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ color: "info.main" }}>Services</Item>
          </Grid>
        </Grid>
      </Box>
    </FlexBox>
  );
};

export default Footer;
