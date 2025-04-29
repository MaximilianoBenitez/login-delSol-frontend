const BASE_URL = "http://190.128.228.66:5300/delsolerp/api";

export const loginRequest = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, message: "Error de conexión con el servidor." };
  }
};

export const logoutRequest = async (sessionId) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sessionId }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, message: "Error al cerrar sesión." };
  }
};
