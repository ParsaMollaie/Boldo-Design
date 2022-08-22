import { Box, Container, Grid, Typography } from "@mui/material";
import { Stack, styled } from "@mui/system";
import React from "react";

const BlogDiv = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: "100%",
  marginTop: "8rem",
}));

const ContainerItem = styled(Stack)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});

const Item = styled(Box)({
  fontSize: "50px",
  fontWeight: "fontWeightLight",
  color: "primary.light",
});

const FifthSection = () => {
  return (
    <BlogDiv>
      <Box>
        <Container sx={{ paddingTop: "6rem" }}>
          <ContainerItem sx={{ padding: " 1rem" }}>
            <Typography
              sx={{
                color: "primary.light",
                fontWeight: "fontWeightLight",
                fontSize: "20px",
              }}
            >
              Our Blog
            </Typography>
            <Typography
              sx={{
                color: "primary.light",
                fontWeight: "fontWeightLight",
                fontSize: "50px",
                marginTop: "2rem",
              }}
            >
              Value proposition accelerator product management venture
            </Typography>
          </ContainerItem>
        </Container>
        <hr
          style={{ width: "70%", marginTop: "3rem", border: "1px solid white" }}
        />
      </Box>

      <Box sx={{ paddingBottom: "8rem" }}>
        <Grid
          container
          spacing={12}
          sx={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
            paddingRight: "15rem",
            paddingLeft: "15rem",
          }}
        >
          <Grid item xs={6}>
            <Item>
              <Typography
                sx={{
                  fontSize: "50px",
                  fontWeight: "fontWeightLight",
                  color: "primary.light",
                }}
              >
                We are{" "}
                <Typography
                  sx={{
                    display: "inline",
                    color: "primary.main",
                    fontSize: "50px",
                    fontWeight: "fontWeightLight",
                  }}
                >
                  commited.
                </Typography>
              </Typography>
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item
              sx={{
                color: "secondary.light",
                fontSize: "20px",
                textAlign: "left",
                fontWeight: "fontWeightLight",
                // width: "65%",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odit
              in, quo aut eum eaque asperiores ducimus architecto error,
              voluptatibus dolorem a non nisi placeat hic consectetur vero id!
              Similique.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item>
              <Typography
                sx={{
                  fontSize: "50px",
                  fontWeight: "fontWeightLight",
                  color: "primary.light",
                }}
              >
                We are{" "}
                <Typography
                  sx={{
                    display: "inline",
                    color: "primary.main",
                    fontSize: "50px",
                    fontWeight: "fontWeightLight",
                  }}
                >
                  responsible.
                </Typography>
              </Typography>
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item
              sx={{
                color: "secondary.light",
                fontSize: "20px",
                textAlign: "left",
                fontWeight: "fontWeightLight",
                // width: "65%",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odit
              in, quo aut eum eaque asperiores ducimus architecto error,
              voluptatibus dolorem a non nisi placeat hic consectetur vero id!
              Similique.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item>
              <Typography
                sx={{
                  fontSize: "50px",
                  fontWeight: "fontWeightLight",
                  color: "primary.light",
                }}
              >
                We aim for{" "}
                <Typography
                  sx={{
                    display: "inline",
                    color: "primary.main",
                    fontSize: "50px",
                    fontWeight: "fontWeightLight",
                  }}
                >
                  progress.
                </Typography>
              </Typography>
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item
              sx={{
                color: "secondary.light",
                fontSize: "20px",
                textAlign: "left",
                fontWeight: "fontWeightLight",
                // width: "65%",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odit
              in, quo aut eum eaque asperiores ducimus architecto error,
              voluptatibus dolorem a non nisi placeat hic consectetur vero id!
              Similique.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Item>
          </Grid>
        </Grid>
      </Box>
    </BlogDiv>
  );
};

export default FifthSection;
