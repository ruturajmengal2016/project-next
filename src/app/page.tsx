"use client";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        height: "72%",
        backgroundColor: "lightcoral",
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "50%",
            border: "1px solid red",
          },
          height: "100%",
        }}
      >
        <Typography variant="h3">Programmer</Typography>
      </Box>
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "50%",
            border: "1px solid red",
          },
          height: "100%",
        }}
      >
        <Typography variant="h3">Designer</Typography>
      </Box>
    </Box>
  );
}
