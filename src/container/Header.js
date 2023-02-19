import React from "react";
import { Container, Paper, Typography } from "@mui/material";

function Header() {
  return (
    <Container maxWidth="xl">
      <Paper elevation={4}>
        <Typography variant="h4" sx={{ p: 2, fontWeight: 700 }}>
          E-Shop
        </Typography>
      </Paper>
    </Container>
  );
}

export default Header;
