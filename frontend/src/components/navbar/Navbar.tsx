import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";
import { grey } from "@mui/material/colors";
import "./Nav.css";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Where To Travel
          </Typography>
          <NavLink to="signup">
            <Link color={grey[50]} component="button" variant="body1">
              Sign Up
            </Link>
          </NavLink>
          <NavLink to="login">
            <Link
              sx={{ padding: "1rem" }}
              color={grey[50]}
              component="button"
              variant="body1"
            >
              Login
            </Link>
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <Link
              sx={{ padding: "1rem" }}
              color={grey[50]}
              component="button"
              variant="body1"
            >
              Home
            </Link>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
