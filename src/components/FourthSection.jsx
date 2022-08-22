import styled from "@emotion/styled";
import { Container, Stack, Typography, Box } from "@mui/material";
import React from "react";
import MichaelImg from "../images/MichaelScott.jpg";
import DwightImg from "../images/Dwight.jpg";

const ContainerDiv = styled(Box)({
  width: "100%",
});

const CardDiv = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "5rem",
});

const ImageCard = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "25px",
});

const ImageDiv = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const ImageList = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "22rem",
  marginTop: "5rem",
});

const ImageListItem = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
});

const FourthSection = () => {
  return (
    <Box sx={{ marginTop: "2rem" }}>
      <ContainerDiv>
        <Container>
          <Stack sx={{ padding: " 6rem" }}>
            <Typography
              color="info.main"
              sx={{ fontSize: "20px", fontWeight: "fontWeightLight" }}
            >
              Our team
            </Typography>
            <Typography
              color="common"
              sx={{
                fontSize: "45px",
                marginTop: "10px",
                fontWeight: "fontWeightRegular",
              }}
            >
              The people behind work
            </Typography>
            <Typography
              color="info.main"
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
              laborum, voluptates non dolorem earum quisquam aut soluta
              voluptatem magnam iste qui aliquid facilis, corrupti in numquam
              quia, vitae accusamus?
            </Typography>
          </Stack>
        </Container>
      </ContainerDiv>
      <CardDiv>
        <ImageCard>
          <Box
            component="img"
            sx={{
              height: 300,
              width: 300,
              borderRadius: "15px",
            }}
            alt="Micheal scott image."
            src={MichaelImg}
          />

          <Typography
            color="common"
            sx={{ fontSize: "25px", fontWeight: "fontWeightRegular" }}
          >
            Micheal Scott
          </Typography>
          <Typography color="info.main" sx={{ fontSize: "17px" }}>
            General Manager
          </Typography>
        </ImageCard>
        <ImageCard>
          <Box
            component="img"
            sx={{
              height: 300,
              width: 300,
              borderRadius: "15px",
            }}
            alt="Micheal scott image."
            src={MichaelImg}
          />
          <Typography
            color="common"
            sx={{ fontSize: "25px", fontWeight: "fontWeightRegular" }}
          >
            Micheal Scott
          </Typography>
          <Typography color="info.main" sx={{ fontSize: "15px" }}>
            General Manager
          </Typography>
        </ImageCard>
        <ImageCard>
          <Box sx={{ width: "100%" }}>
            <Box
              component="img"
              sx={{
                height: 300,
                width: 300,
                borderRadius: "15px",
              }}
              alt="Micheal scott image."
              src={MichaelImg}
            />
          </Box>
          <Typography
            color="common"
            sx={{ fontSize: "25px", fontWeight: "fontWeightRegular" }}
          >
            Micheal Scott
          </Typography>
          <Typography color="info.main" sx={{ fontSize: "15px" }}>
            General Manager
          </Typography>
        </ImageCard>
      </CardDiv>
      <ImageDiv>
        <ImageList>
          <ImageListItem>
            <Box
              component="img"
              sx={{
                height: 150,
                width: 150,
                borderRadius: "15px",
              }}
              alt="Dwight image."
              src={DwightImg}
            />
            <Box>
              <Typography
                color="common"
                sx={{
                  fontSize: "25px",
                  fontWeight: "fontWeightRegular",
                  margin: "8px",
                }}
              >
                Dwight Schrute
              </Typography>
              <Typography
                color="info.main"
                sx={{ fontSize: "15px", margin: "8px" }}
              >
                General Manager
              </Typography>
            </Box>
          </ImageListItem>

          <ImageListItem>
            <Box
              component="img"
              sx={{
                height: 150,
                width: 150,
                borderRadius: "15px",
              }}
              alt="Dwight image."
              src={DwightImg}
            />
            <Box>
              <Typography
                color="common"
                sx={{
                  fontSize: "25px",
                  fontWeight: "fontWeightRegular",
                  margin: "8px",
                }}
              >
                Dwight Schrute
              </Typography>
              <Typography
                color="info.main"
                sx={{ fontSize: "15px", margin: "8px" }}
              >
                General Manager
              </Typography>
            </Box>
          </ImageListItem>
        </ImageList>

        <ImageList>
          <ImageListItem>
            <Box
              component="img"
              sx={{
                height: 150,
                width: 150,
                borderRadius: "15px",
              }}
              alt="Dwight image."
              src={DwightImg}
            />
            <Box>
              <Typography
                color="common"
                sx={{
                  fontSize: "25px",
                  fontWeight: "fontWeightRegular",
                  margin: "8px",
                }}
              >
                Dwight Schrute
              </Typography>
              <Typography
                color="info.main"
                sx={{ fontSize: "15px", margin: "8px" }}
              >
                General Manager
              </Typography>
            </Box>
          </ImageListItem>

          <ImageListItem>
            <Box
              component="img"
              sx={{
                height: 150,
                width: 150,
                borderRadius: "15px",
              }}
              alt="Dwight image."
              src={DwightImg}
            />
            <Box>
              <Typography
                color="common"
                sx={{
                  fontSize: "25px",
                  fontWeight: "fontWeightRegular",
                  margin: "8px",
                }}
              >
                Dwight Schrute
              </Typography>
              <Typography
                color="info.main"
                sx={{ fontSize: "15px", margin: "8px" }}
              >
                General Manager
              </Typography>
            </Box>
          </ImageListItem>
        </ImageList>
      </ImageDiv>
    </Box>
  );
};

export default FourthSection;
