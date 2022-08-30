import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

import React from "react";

const MyBox = styled(Box)({
  marginTop: "8rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

const BoxItem = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: "60%",
  borderRadius: "10px",
  padding: "4rem 12rem",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "4rem 4rem",
  },
}));

const EmailBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  },
}));

const EmailInput = styled("input")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "80% !important",
  },
}));

const EmailButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "70%",
  },
}));

// const WhiteBorderTextField = styled(TextField)`
//   & label.Mui-focused {
//     color: #0a2640;
//   }
//   & .MuiOutlinedInput-root {
//     & fieldset {
//       fillcolor: white,
//       filled:true;
//     }
//   }
// `;

// const StyledTextField =
//   styled(TextField, options) <
//   Props >
//   (({ fontColor }) => ({
//     input: {
//       color: fontColor,
//     },
//   }));

const Sixth = () => {
  return (
    <MyBox>
      <BoxItem>
        <Box>
          <Typography
            sx={{
              color: "primary.light",
              fontSize: { xs: "35px", sm: "50px" },
              fontWeight: "fontWeightLight",
            }}
          >
            An enterprise template to ramp up your company website
          </Typography>
        </Box>
        <EmailBox
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginTop: "2rem",
            width: "100%",
          }}
        >
          <EmailInput
            id="txt_email"
            placeholder="Your email address"
            type="text"
            style={{
              borderRadius: 30,
              width: "25rem",
              padding: "10px 15px",
              outline: 0,
              border: 0,
            }}
          ></EmailInput>
          <EmailButton
            variant="contained"
            sx={{
              padding: "10px 40px",
              color: "secondary.main",
              fontWeight: "fontWeightBold",
              fontSize: "15px",
            }}
          >
            Start now
          </EmailButton>
        </EmailBox>
      </BoxItem>
    </MyBox>
  );
};

export default Sixth;
