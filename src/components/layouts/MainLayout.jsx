import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AppBar } from "../AppBar";
import { Suspense } from "react";
import { Box, Container } from "@mui/material";

export const MainLayout = () => {
  return (
    <Box sx={{margin:"0 auto", maxWidth: "md", height: "100%"}}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </Box>
  );
};
