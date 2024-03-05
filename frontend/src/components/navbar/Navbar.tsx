import { AppBar, Box, Icon, Toolbar } from "@mui/material";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";
import { grey } from "@mui/material/colors";
import "./Nav.css";
import { NavbarItems } from "./NavbarItems";
import { NavbarItem } from "./NavbarItem";
import { nanoid } from "nanoid";

const Navbar = () => {
  const navItems = NavbarItems.map((navItem: NavbarItem) => (
    <NavLink
      to={navItem.navLink}
      key={nanoid()}
      className={`px-4 flex flex-col items-center`}
    >
      <Icon>{navItem.icon}</Icon>
      <Link color={grey[100]} component="button">
        {navItem.text}
      </Link>
    </NavLink>
  ));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={`flex-row-reverse`}>{navItems}</Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
