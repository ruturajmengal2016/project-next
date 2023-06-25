"use client";
import * as React from "react";
import { Box } from "@mui/material";
interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <Box
      sx={{
        height: "72%",
        backgroundColor: "lightcoral",
      }}
    >
      About
    </Box>
  );
};

export default About;
