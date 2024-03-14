import { Alert, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { UserCredentials } from "./UserCredentials";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useAuthContext } from "../../contexts/AuthProvider";
import { apiServiceProvider } from "../../api/ApiService";

type JwtToken = {
  token: string;
};

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [err, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const { setAuth } = useAuthContext();
  const apiService = apiServiceProvider();

  useEffect(() => {
    setError(false);
  }, [email, password]);

  const credentials: UserCredentials = {
    email: email,
    password: password,
  };

  const login = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const authenticate = apiService.post<JwtToken>(
        "auth/authenticate",
        credentials
      );
      const response = await authenticate();

      if (response.status === 200) {
        if (response.data.token) {
          const jwtToken = response.data.token;
          setAuth(jwtToken);
        }
        navigate("/");
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <form className="form" onSubmit={login}>
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        type="input"
        required
        className="input"
        label="Email"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        required
        className="input"
        label="Password"
        type="password"
        variant="outlined"
      />
      {err ? (
        <Alert sx={{ marginTop: 2 }} severity="info">
          Some thing went wrong ! Check your username and password
        </Alert>
      ) : (
        ""
      )}
      <Button type="submit" variant="contained">
        Sign In
      </Button>
    </form>
  );
};

export default Login;
