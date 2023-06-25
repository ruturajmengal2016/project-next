"use client";
import * as React from "react";
import { Box } from "@mui/material";
interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <Box
      sx={{
        height: "20%",
        backgroundColor: "lightgrey",
      }}
    >
      Footer
    </Box>
  );
};

export default Footer;
