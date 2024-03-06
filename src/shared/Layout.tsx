// src/components/Layout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import { AppBar, Box, Typography } from "@mui/material";

const Layout: React.FC = () => {
  return (
    <>
      <AppBar position="static">
        <Box padding="20px 15px" className="sm:text-start lg:text-center">
          <Typography fontSize={{ xs: 25, lg: 28 }} fontWeight={700}>
          <i className="ri-qq-line"></i> FamPay
          </Typography>{" "}
          <Typography fontSize={{ xs: 10, lg: 10 }} marginBottom={2}>
            ( Family Money tracking )
          </Typography>{" "}
          <Typography className=" sm:text-sm	 md:text-3xl">
            บัญชีเงินเข้า - เงินออก
          </Typography>{" "}
        </Box>
      </AppBar>

      <Box
        margin={{ xs: 1, lg: 10 }}
        boxShadow={1}
        rounded-lg
        padding={{ xs: 0.6, lg: 5 }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
