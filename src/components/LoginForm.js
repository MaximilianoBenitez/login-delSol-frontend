import { useState, useContext } from "react";
import {
  TextField,
  Button,
  Box,
  CircularProgress,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { AuthContext } from "../context/AuthContext.js";

const LoginForm = () => {
  const { login, loading, message } = useContext(AuthContext);
  const [form, setForm] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false); 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form.username, form.password);
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const getFriendlyMessage = (msg) => {
    if (msg?.includes("ORA-01017")) {
      return "Usuario o contraseña incorrectos.";
    }
    return msg;
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        width: "100%",
      }}
    >
      <TextField
        label="Usuario"
        name="username"
        value={form.username}
        onChange={handleChange}
        fullWidth
        required
        size="small"
      />

      <TextField
        label="Contraseña"
        name="password"
        type={showPassword ? "text" : "password"}
        value={form.password}
        onChange={handleChange}
        fullWidth
        required
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleTogglePassword}
                edge="end"
                size="small"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        fullWidth
        sx={{
          height: 45,
          backgroundColor: "primary.main",
          '&.Mui-disabled': {
            backgroundColor: "primary.main",
            color: "#ffffff",
          },
        }}
      >
        {loading ? <CircularProgress size={24} sx={{ color: "#ffffff" }} /> : "Ingresar"}
      </Button>

      {message && (
        <Typography variant="body2" color="error" textAlign="center" sx={{ mt: 1 }}>
          {getFriendlyMessage(message)}
        </Typography>
      )}
    </Box>
  );
};

export default LoginForm;
