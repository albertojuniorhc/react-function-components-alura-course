import React from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { Container, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Register Form
      </Typography>
      <RegisterForm
        submitForm={onSubmitForm}
        isCPFValid={isCPFValid}
        isNameValid={isNameValid}
        isLastNameValid={isLastNameValid}
      />
    </Container>
  );
}

function onSubmitForm(dataForm) {
  console.log(dataForm);
}

function isCPFValid(cpf) {
  if (cpf.length !== 11) {
    return { isValid: false, text: "This field must have 11 digits." };
  } else {
    return { isValid: true, text: "" };
  }
}

function isNameValid(name) {
  if (name.length < 3) {
    return { isValid: false, text: "This field must have at least 3 digits" };
  } else {
    return {isValid: true, text: ""}
  }
}

function isLastNameValid(lastName) {
  if (lastName.length < 2) {
    return { isValid: false, text: "This field must have at least 2 digits" };
  } else {
    return {isValid: true, text: ""}
  }
}

export default App;
