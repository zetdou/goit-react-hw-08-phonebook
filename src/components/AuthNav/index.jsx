import { NavLink } from "react-router-dom";
import { Button, Box } from "@mui/material";

export const AuthNav = () => {
  return (
    <Box>
      <Button component={NavLink} to="/register" color="inherit">
        Register
      </Button>
      <Button component={NavLink} to="/login" color="inherit">
        Log In
      </Button>
    </Box>
  );
};
