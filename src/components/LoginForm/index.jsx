import { useDispatch } from "react-redux";
import { logIn } from "../../redux/operations/authOperation";
import { TextField, Button, Box } from "@mui/material";

export const LoginForm = () => {
  const dispatch = useDispatch();

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
      <TextField label="Password" type="password" name="password" required />
      <Button type="submit" variant="contained" color="primary">
        Log in
      </Button>
    </Box>
  );
};
