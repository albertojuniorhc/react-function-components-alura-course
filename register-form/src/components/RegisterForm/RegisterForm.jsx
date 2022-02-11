import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

function RegisterForm({ submitForm }) {
  const [name, setName] = useState("Alberto");
  const [lastName, setLastName] = useState("Junior");
  const [cpf, setCpf] = useState("121.321.538-21");
  const [promo, setPromo] = useState(true);
  const [news, setNews] = useState(true);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        submitForm({ name, lastName, cpf, promo, news });
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
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
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        label="Promo?"
        control={
          <Switch
            onChange={(event) => {
              setPromo(event.target.checked);
            }}
            name="promo"
            checked={promo}
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="News?"
        control={
          <Switch
            onChange={(event) => {
              setNews(event.target.checked);
            }}
            name="news"
            checked={news}
            color="primary"
          />
        }
      />

      <Button variant="contained" color="primary" type="submit">
        Send
      </Button>
    </form>
  );
}

export default RegisterForm;
