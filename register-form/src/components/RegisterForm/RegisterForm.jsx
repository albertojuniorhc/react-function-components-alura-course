import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";
import { useEffect } from "react";

function RegisterForm({
  submitForm,
  isCPFValid,
  isNameValid,
  isLastNameValid,
}) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [promo, setPromo] = useState(true);
  const [news, setNews] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({
    cpf: { isValid: true, text: "" },
    name: { isValid: true, text: "" },
    lastName: { isValid: true, text: "" },
  });

  const validationField = (field, func) => {
    const fieldValidation = func(field.value);
    const errorsTemp = { ...errors, [field.id]: fieldValidation };
    setErrors(errorsTemp);
    validationForm(errorsTemp);
  };

  // useEffect(() => {
  //   console.log("isFormValid", isFormValid);
  // }, [isFormValid]);

  const validationForm = (obj) => {
    let control = 0;
    for (let [key, value] of Object.entries(obj)) {
      if (value.isValid === false) {
        control++;
      }
    }
    control > 0 ? setIsFormValid(false) : setIsFormValid(true);
  };

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
          validationField(event.target, isNameValid);
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
          validationField(event.target, isLastNameValid);
        }}
        error={!errors.lastName.isValid}
        helperText={errors.lastName.text}
        id="lastName"
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
          validationField(event.target, isCPFValid);
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

      <Button
        disabled={!isFormValid}
        variant="contained"
        color="primary"
        type="submit"
      >
        Send
      </Button>
    </form>
  );
}

export default RegisterForm;
