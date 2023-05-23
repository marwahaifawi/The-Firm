import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "./Logo/index";
import ButtonApp from "./button";
import NavBar from "../components/navbar";
import { Stack } from "@mui/material";

const HeaderApp = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerWidth = 240;
  const navItems = [
    { text: "Home", link: "/" },
    { text: "Solutions", link: "/solutions" },
    { text: "Cases", link: "/cases" },
    { text: "About Us", link: "/about" },
    { text: "Blogs", link: "/blog" },
    { text: "Contact Us", link: "/contact" },
  ];
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component={Link} to={item.link}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Stack>
      <AppBar component="nav" color="inherit" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { xs: "block", sm: "block", md: "none", lg: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, display: "block" }}>
            <Logo />
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={{ xs: 1, sm: 3, md: 4 }}
            display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
          >
            {navItems.map((item, index) => (
              <NavBar
                color="#1E1E1E"
                underline="hover"
                key={index}
                linkTo={item.link}
              >
                {item.text}
              </NavBar>
            ))}
            <ButtonApp linkTo="/signup" variant="contained">
              Sign Up
            </ButtonApp>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Stack>
  );
};

export default HeaderApp;
