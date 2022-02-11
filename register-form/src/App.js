import React from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { Container, Typography } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Register Form</Typography>
      <RegisterForm />
    </Container>
  );
}

export default App;