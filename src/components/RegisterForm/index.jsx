import { useDispatch } from "react-redux";
import { register } from "../../redux/operations/authOperation";
import { TextField, Button, Box } from "@mui/material";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
      <TextField label="Username" type="text" name="name" required />
      <TextField label="Email" type="email" name="email" required />
      <TextField label="Password" type="password" name="password" required />
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </Box>
  );
};
