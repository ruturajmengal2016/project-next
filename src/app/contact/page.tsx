"use client";
import * as React from "react";
import { Box, Typography } from "@mui/material";
interface IContactProps {}
interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const Contact: React.FunctionComponent<IContactProps> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-cache",
  });
  const data: Data[] = await res.json();
  return (
    <Box
      sx={{
        height: "72%",
        backgroundColor: "lightcoral",
        overflow: "auto",
        display: "grid",
        gap: "1rem",
        padding: "1rem",
        gridTemplateColumns: { xs: "auto", md: "auto auto" },
      }}
    >
      {data.map((ele: Data, ind: number) => {
        return (
          <Box
            key={ind}
            sx={{
              height: "10rem",
              border: "1px solid black",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" width="50%">
              {ele.title}
            </Typography>
            <Typography variant="body1">{ele.body}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Contact;
