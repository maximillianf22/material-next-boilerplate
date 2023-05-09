import React, { FC, ReactNode } from "react";
import TopBar from "./TopBar";
import { Box } from "@mui/material";

interface Props {
  children: ReactNode;
  topBar: boolean;
  footer: boolean;
  privatePage: boolean;
}

const Content: FC<Props> = ({ children, topBar }) => {
  return (
    <main style={{ height: "100vh", overflow: "hidden" }}>
      <>
        {topBar && <TopBar />}
        <Box>{children}</Box>
      </>
    </main>
  );
};
export default Content;
