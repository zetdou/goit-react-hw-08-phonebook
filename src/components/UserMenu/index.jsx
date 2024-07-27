import { useDispatch } from "react-redux";
import { logOut } from "../../redux/operations/authOperation";
import { useAuth } from "../../hooks";
import { Box, Typography, Switch } from "@mui/material";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogoutToggle = (event) => {
    if (event.target.checked === false) {
      dispatch(logOut());
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Typography variant="body1">Welcome, {user.name}</Typography>
      <Switch
        checked={true} // Switch should be off initially
        onChange={handleLogoutToggle}
        color="secondary"
        inputProps={{ "aria-label": "Logout switch" }}
      />
    </Box>
  );
};
