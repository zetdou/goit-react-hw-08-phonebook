import { AuthNav } from "../AuthNav";
import { Navigation } from "../Navigation";
import { UserMenu } from "../UserMenu";
import { useAuth } from "../../hooks";
import { AppBar as MuiAppBar, Toolbar, Typography, Box } from "@mui/material";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Navigation />
        </Box>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </MuiAppBar>
  );
};
