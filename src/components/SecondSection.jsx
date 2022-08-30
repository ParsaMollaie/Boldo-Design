import { Box, Container, styled, Typography } from "@mui/material";
import { common } from "@mui/material/colors";
import React from "react";

const ColumnBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  marginTop: "7rem",
});

const RowBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "space-evenly",
  marginTop: "3rem",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
  },
}));

const RowBoxItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

const SecondSection = () => {
  return (
    <>
      <ColumnBox>
        <Box sx={{ fontSize: "20px" }} color={common}>
          Our numbers
        </Box>
        <Container>
          <Typography
            color="secondary"
            sx={{
              marginTop: "1rem",
              fontSize: "50px",
              fontWeight: "fontWeightLight",
            }}
          >
            Handshake infographic mass market crowdfuning iteration.
          </Typography>
        </Container>
      </ColumnBox>
      <RowBox>
        <RowBoxItem>
          <Typography
            color="secondary"
            sx={{ fontSize: { sm: "6rem", xs: "5rem" } }}
          >
            120m
          </Typography>
          <Typography
            color="secondary"
            sx={{ fontSize: "15px", fontWeight: "fontWeightMedium" }}
          >
            Cool feature title
          </Typography>
        </RowBoxItem>
        <RowBoxItem>
          <Typography
            color="secondary"
            sx={{ fontSize: { sm: "6rem", xs: "5rem" } }}
          >
            10.000
          </Typography>
          <Typography
            color="secondary"
            sx={{ fontSize: "15px", fontWeight: "fontWeightMedium" }}
          >
            Cool feature title
          </Typography>
        </RowBoxItem>
        <RowBoxItem>
          <Typography
            color="secondary"
            sx={{ fontSize: { sm: "6rem", xs: "5rem" } }}
          >
            240
          </Typography>
          <Typography
            color="secondary"
            sx={{ fontSize: "15px", fontWeight: "fontWeightMedium" }}
          >
            Cool feature title
          </Typography>
        </RowBoxItem>
      </RowBox>
    </>
  );
};

export default SecondSection;
