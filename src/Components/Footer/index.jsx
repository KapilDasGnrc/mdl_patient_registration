import { Box, Typography } from "@mui/material";
import React from "react";

const nav = ["About", "Contact-us", "Office", "Location"];
const Index = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderTop: "1px solid #dbd6d6",
        boxShadow: "1px 2px 9px 1px",
        padding: "1rem",
        height: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        bottom:"0",
        width: "100%"
      }}
    >
      {nav.map((item) => (
        <Typography
          key={item}
          variant="subTitle1"
          sx={{ margin: ".5rem", fontSize: "1rem", padding: ".3rem" }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
};

export default Index;
