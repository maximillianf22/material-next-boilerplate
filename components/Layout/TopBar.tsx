import React, { FC } from "react";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Breadcrumbs, Link } from "@mui/material";

const TopBar: FC = () => {
  const router = useRouter();
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar disableGutters={true}>
          <Box sx={{ px: 4 }}>
            <h1>Humancore</h1>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default TopBar;
