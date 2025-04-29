import { AppBar, Toolbar, Typography, IconButton, Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import Logo from '../assets/images/logo.svg';

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  return (
    <>
      <AppBar
        position="static"
        color="secondary"
        sx={{
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          backgroundColor: (theme) => theme.palette.background.paper,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center", padding: "6px 24px" }}>
          <Box sx={{ display: "flex", alignItems: "center", marginRight: { xs: 1, sm: 3 } }}>
            <img
              src={Logo}
              alt="Logo"
              style={{ width: 150, height: 'auto', objectFit: "contain" }}
            />
          </Box>

          <IconButton
            color="inherit"
            edge="start"
            sx={{ display: { xs: "flex", sm: "none" }, marginLeft: 1 }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
            <IconButton sx={{ mr: 2 }}>
              <AccountCircleIcon sx={{ fontSize: 28, color: 'text.primary' }} />
            </IconButton>
            <Typography
              variant="body1"
              sx={{
                mr: 2,
                color: "text.primary",
                fontWeight: 500,
                fontFamily: 'Roboto, sans-serif',
              }}
            >
              {user?.nombre || "Invitado"}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mr: 2,
                cursor: 'pointer',
                '&:hover': { textDecoration: 'underline' }
              }}
              onClick={() => console.log('Ir a Configuración')}
            >
              <SettingsIcon sx={{ fontSize: 28, color: 'text.primary', mr: 1 }} />
              <Typography
                variant="body1"
                sx={{
                  color: "text.primary",
                  fontWeight: 500,
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                Configuración
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: 'pointer',
                '&:hover': { textDecoration: 'underline' }
              }}
              onClick={logout}
            >
              <LogoutIcon sx={{ fontSize: 28, color: '#FFBF3F', mr: 1 }} />
              <Typography
                variant="body1"
                sx={{
                  mr: 1,
                  color: "text.primary",
                  fontWeight: 500,
                  fontFamily: 'Roboto, sans-serif',
                }}
              >
                Cerrar sesión
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
        sx={{ padding: '10px' }}
      >
        <Box sx={{ width: 250 }}>
          <List>
            <ListItem button onClick={() => toggleDrawer(false)}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountCircleIcon sx={{ marginRight: 1 }} />
                <ListItemText primary="Perfil" />
              </Box>
            </ListItem>
            <ListItem button onClick={() => toggleDrawer(false)}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <SettingsIcon sx={{ marginRight: 1 }} />
                <ListItemText primary="Configuraciones" />
              </Box>
            </ListItem>
            <ListItem button onClick={logout}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LogoutIcon sx={{ marginRight: 1, color: '#FFBF3F' }} /> 
                <ListItemText primary="Cerrar sesión" />
              </Box>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
