import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks";
import { Button, Box } from "@mui/material";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box>
      <Button component={NavLink} to="/" color="inherit">
        Home
      </Button>
      {isLoggedIn && (
        <Button component={NavLink} to="/contacts" color="inherit">
          Your contacts
        </Button>
      )}
    </Box>
  );
};
