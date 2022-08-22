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

const RowBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "space-evenly",
  marginTop: "3rem",
});

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
        <Box
          sx={{ display: "flex", flexDirection: "column", textAlign: "left" }}
        >
          <Typography color="secondary" sx={{ fontSize: "6rem" }}>
            120m
          </Typography>
          <Typography
            color="secondary"
            sx={{ fontSize: "15px", fontWeight: "fontWeightMedium" }}
          >
            Cool feature title
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "column", textAlign: "left" }}
        >
          <Typography color="secondary" sx={{ fontSize: "6rem" }}>
            10.000
          </Typography>
          <Typography
            color="secondary"
            sx={{ fontSize: "15px", fontWeight: "fontWeightMedium" }}
          >
            Cool feature title
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "column", textAlign: "left" }}
        >
          <Typography color="secondary" sx={{ fontSize: "6rem" }}>
            240
          </Typography>
          <Typography
            color="secondary"
            sx={{ fontSize: "15px", fontWeight: "fontWeightMedium" }}
          >
            Cool feature title
          </Typography>
        </Box>
      </RowBox>
    </>
  );
};

export default SecondSection;
