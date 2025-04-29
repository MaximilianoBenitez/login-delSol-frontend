import { createContext, useState } from "react";
import { loginRequest, logoutRequest } from "../services/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const login = async (username, password) => {
    setLoading(true);
    setMessage("");

    try {
      const res = await loginRequest(username, password);
      setLoading(false);

      if (res.success) {
        console.log("Usuario autenticado:", res); 

        setUser(res.data);
        setSessionId(res.data.sessionId);
        navigate("/dashboard");
      } else {
        setMessage(res.message || "Error al iniciar sesión.");
      }
    } catch (error) {
      setLoading(false);
      setMessage("Error en la conexión con el servidor.");
    }
  };

  const logout = async () => {
    if (sessionId) {
      try {
        const res = await logoutRequest(sessionId);
        if (res.success) {
          setUser(null);
          setSessionId(null);
          navigate("/");
        } else {
          setMessage(res.message || "Error al cerrar sesión.");
        }
      } catch (error) {
        setMessage("Error al cerrar sesión.");
      }
    } else {
      setMessage("No se pudo cerrar sesión. No se encontró una sesión activa.");
    }
  };

  return (
    <AuthContext.Provider value={{ user, sessionId, loading, message, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
