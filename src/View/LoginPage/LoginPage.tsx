import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Stack, Button } from "@mui/material";
import api from "../../api/api";
import style from "./LoginPage.module.css";
import { loginToken } from "../../api/auth";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  async function login() {
    try {
      const data = await api.post("/session", {
        email,
        password,
      });
      const { token } = data.data;
      api.defaults.headers["Authorization"] = `Bearer ${token.token}`;
      loginToken(token);
      navigation("/dashboard", { replace: true });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <h1 className={style.textHeader}>Bem vindo</h1>
        <TextField
          sx={{
            width: "100%",
            marginBottom: "1rem",
          }}
          type="text"
          placeholder="Username"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <TextField
          sx={{
            width: "100%",
            marginBottom: "1rem",
          }}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button
          onClick={login}
          variant="contained"
          sx={{
            width: "100%",
            marginBottom: "1rem",
          }}
        >
          Login
        </Button>

        <Stack
          direction={{ xs: "column", sm: "row", md: "row", lg: "row" }}
          spacing={12}
        >
          <div>
            <p>Don't have an account?</p>
            <Button href="/register" color="primary" variant="contained">
              Register
            </Button>
          </div>

          <div>
            <p>Forgot your password?</p>
            <Button
              href="/forgot-pButtonssword"
              color="secondary"
              variant="contained"
            >
              Reset Password
            </Button>
          </div>
        </Stack>
      </Container>
    </>
  );
}
