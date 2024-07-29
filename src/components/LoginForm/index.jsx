import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/operations/authOperation";
import { TextField, Button, Box, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      }),
    );
    form.reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 300,
        margin: "auto",
        mt: 4,
      }}
      autoComplete="off">
      <TextField label="Email" type="email" name="email" required />
      <TextField
        label="Password"
        type={showPassword ? "text" : "password"}
        name="password"
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={(event) => event.preventDefault()}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button type="submit" variant="contained" color="primary">
        Log in
      </Button>
    </Box>
  );
};
