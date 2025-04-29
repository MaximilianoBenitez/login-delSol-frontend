import { Box, Typography, Container, Grid, Card, CardContent, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import { useState } from "react";

const DashboardPage = () => {
  const [data, setData] = useState({
    totalUsers: 1200,
    activeUsers: 320,
    totalSales: 4500,
    pendingOrders: 10,
  });

  return (
    <Box>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>Bienvenido al Panel de Control</Typography>
        <Typography variant="body1" gutterBottom>
          Aquí puedes mostrar estadísticas, accesos a otras secciones, etc.
        </Typography>

        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6">Usuarios Totales</Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  {data.totalUsers}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6">Usuarios Activos</Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  {data.activeUsers}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6">Ventas Totales</Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  ${data.totalSales}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6">Pedidos Pendientes</Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  {data.pendingOrders}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" gutterBottom>Accesos Rápidos</Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Button variant="contained" color="primary" size="large">Gestión de Usuarios</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" size="large">Reportes</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="success" size="large">Configuración</Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default DashboardPage;
