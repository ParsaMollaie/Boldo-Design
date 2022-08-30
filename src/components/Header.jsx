import React from "react";
import { styled } from "@mui/system";

const MainDiv = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "100%",
}));

const Header = () => {
  return <MainDiv></MainDiv>;
};

export default Header;
