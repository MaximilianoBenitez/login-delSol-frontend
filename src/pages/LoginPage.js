import { Container, Box, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";
import logo from "../assets/images/logo.svg";
import sol from "../assets/images/sol.svg";

const LoginPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [showForm, setShowForm] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true); 
    }, 2000);

    if (isSmallScreen) {
      setShowAnimation(true);
      const animationTimer = setTimeout(() => {
        setShowAnimation(false);
      }, 2000);

      return () => {
        clearTimeout(timer);
        clearTimeout(animationTimer);
      };
    }

    return () => clearTimeout(timer);
  }, [isSmallScreen]);

  const formWidth = isSmallScreen ? "85%" : "380px";

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
        backgroundColor: theme.palette.background.default,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      {showAnimation && (
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: isSmallScreen ? "65vw" : "75vw",
      height: isSmallScreen ? "65vw" : "75vw",
      maxWidth: "550px",
      maxHeight: "550px",
      minWidth: "200px",
      minHeight: "200px",
      borderRadius: "50%",
      border: `3px solid ${theme.palette.primary.main}`,
      boxShadow: `0 0 30px 10px ${theme.palette.primary.main}`,
      backgroundColor: "transparent",
      zIndex: 0,
      transition: "all 1s ease",
      animation: "shine 3s infinite alternate",
      pointerEvents: "none",
    }}
  />
)}

      {!showForm && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40vw",
            height: "40vw",
            maxWidth: "400px",
            maxHeight: "400px",
            minWidth: "250px",
            minHeight: "250px",
            backgroundImage: `url(${sol})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            zIndex: 2,
            animation: "rotateSun 40s linear infinite",
            pointerEvents: "none",
            [theme.breakpoints.up('sm')]: {
              width: "35vw",
              height: "35vw",
            },
            [theme.breakpoints.up('md')]: {
              width: "30vw",
              height: "30vw",
            },
          }}
        />
      )}

      <Paper
        elevation={6}
        sx={{
          position: "relative",
          zIndex: 3,
          width: formWidth,
          maxWidth: "320px",
          borderRadius: 3,
          padding: { xs: 3, sm: 4 },
          backgroundColor: theme.palette.background.paper,
          opacity: showForm ? 1 : 0,
          transform: showForm ? "scale(1)" : "scale(0.95)",
          transition: "opacity 1s ease, transform 1s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: showForm ? "auto" : "none",
          border: isSmallScreen
            ? `3px solid ${theme.palette.primary.main}`
            : "none",
          boxShadow: isSmallScreen
            ? `0 0 30px 10px ${theme.palette.primary.main}` 
            : "none",
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="Logo Empresa"
          sx={{
            width: { xs: 120, sm: 160 },
            height: "auto",
            mb: 1,
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />

        <Typography variant="h5" textAlign="center" sx={{ mb: 2 }}>
          Iniciar sesión
        </Typography>

        <LoginForm />
      </Paper>

      <style>
        {`
          @keyframes rotateSun {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }

          @keyframes shine {
            0% { box-shadow: 0 0 30px 10px rgba(255, 215, 0, 0.8); }
            100% { box-shadow: 0 0 60px 20px rgba(255, 215, 0, 1); }
          }
        `}
      </style>
    </Container>
  );
};

export default LoginPage;
