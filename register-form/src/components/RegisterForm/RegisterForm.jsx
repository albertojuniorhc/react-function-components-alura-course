import React from "react";
import {
  Button,
  TextField,
  Switch,
  FormControlLabel,
  Container,
} from "@mui/material";

function RegisterForm() {
  return (
    <form>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="lastname"
        label="Last Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        label="Promo?"
        control={<Switch name="promo" defaultChecked color="primary" />}
      />

      <FormControlLabel
        label="News?"
        control={<Switch name="news" defaultChecked color="primary" />}
      />

      <Button variant="contained" color="primary" type="submit">
        Send
      </Button>
    </form>
  );
}

export default RegisterForm;
