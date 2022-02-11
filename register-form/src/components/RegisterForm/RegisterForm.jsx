import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

function RegisterForm({ submitForm, isCPFValid, isNameValid, isLastNameValid}) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [promo, setPromo] = useState(true);
  const [news, setNews] = useState(true);
  const [errors, setErrors] = useState({
    cpf: { isValid: true, text: "" },
    name: { isValid: true, text: "" },
    lastName: { isValid: true, text: ""}
  });
  // console.log(errors)
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
        onBlur={(event) => {
          const validationName = isNameValid(name);
          setErrors({...errors,
            name: validationName,
          });
        }}
        error={!errors.name.isValid}
        helperText={errors.name.text}
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
        onBlur={(event) => {
          const validationLastName = isLastNameValid(lastName);
          setErrors({...errors,
            lastName: validationLastName,
          });
        }}
        error={!errors.lastName.isValid}
        helperText={errors.lastName.text}
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
        onBlur={(event) => {
          const validationCPF = isCPFValid(event.target.value);
          setErrors({...errors,
            cpf: validationCPF,
          });
        }}
        error={!errors.cpf.isValid}
        helperText={errors.cpf.text}
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
