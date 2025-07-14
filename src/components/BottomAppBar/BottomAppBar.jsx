import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export const BottomAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          {/* Burger menu for xs/sm screens */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              PaperProps={{
                sx: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                },
              }}
            >
              <MenuItem component={Link} to="/about" onClick={handleMenuClose}>
                About
              </MenuItem>
              <MenuItem component={Link} to="/photos" onClick={handleMenuClose}>
                Photos
              </MenuItem>
            </Menu>
          </Box>
          {/* Navigation for md+ screens */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Typography
              variant="button"
              component={Link}
              to="/about"
              color="inherit"
              sx={{ textDecoration: "none" }}
            >
              About
            </Typography>
            <Typography
              variant="button"
              component={Link}
              to="/photos"
              color="inherit"
              sx={{ textDecoration: "none" }}
            >
              Photos
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
