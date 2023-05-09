import React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import Link from "next/link";
import Content from "../components/Layout/Content";
import Header from "../components/Layout/Header";

const Index: NextPage = () => {
  return (
    <>
      <Header title="humancore" />
      <Content privatePage={false} footer topBar>
        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Material UI - Next.js example
            </Typography>
            <Link href="/about" color="secondary">
              <a>Go to the about page</a>
            </Link>
            <ProTip />
            <Copyright />
          </Box>
        </Container>
      </Content>
    </>
  );
};

export default Index;
