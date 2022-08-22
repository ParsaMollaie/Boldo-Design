import { Container, Typography, styled } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const ContainerDiv = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: "100%",
  marginTop: "7rem",
}));

const ThirdSection = () => {
  return (
    <ContainerDiv>
      <Container sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Stack sx={{ padding: " 5rem" }}>
          <Typography
            color="primary.light"
            sx={{ fontSize: "20px", fontWeight: "fontWeightLight" }}
          >
            Our story
          </Typography>
          <Typography
            color="primary.light"
            sx={{
              fontSize: "45px",
              marginTop: "10px",
              fontWeight: "fontWeightLight",
            }}
          >
            Handshake infographic mass market crowdfunding iteration.
          </Typography>
          <Typography
            color="secondary.light"
            sx={{
              fontSize: "20px",
              marginTop: "20px",
              fontWeight: "fontWeightLight",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            perspiciatis in quisquam laboriosam tenetur reiciendis ipsa porro
            alias pariatur? Iure doloribus, voluptate deleniti repellendus
            exercitationem tempora molestiae nihil aperiam commodi?Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Voluptatum delectus
            laborum, voluptates non dolorem earum quisquam aut soluta voluptatem
            magnam iste qui aliquid facilis, corrupti in numquam quia, vitae
            accusamus?
          </Typography>
        </Stack>
      </Container>
    </ContainerDiv>
  );
};

export default ThirdSection;
