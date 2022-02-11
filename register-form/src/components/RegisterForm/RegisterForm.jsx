import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

function RegisterForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(`${name} ${lastName}`);
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          let tmpName = event.target.value;
          if (tmpName.length >= 3) {
            tmpName = tmpName.substring(0, 3);
          }
          setName(tmpName);
        }}
        id="name"
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
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
