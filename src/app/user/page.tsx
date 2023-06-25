"use client";
import * as React from "react";
import { Box } from "@mui/material";
interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = () => {
  return (
    <Box
      sx={{
        height: "72%",
        backgroundColor: "lightcoral",
      }}
    >
      Login and Register
    </Box>
  );
};

export default Home;
