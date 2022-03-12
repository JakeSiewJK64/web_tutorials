import React from "react";
import { AppBar, Button, IconButton, Box, Toolbar } from "@mui/material";
import Icon from "@mdi/react";
import { mdiAccount, mdiMenu } from "@mdi/js";

import "../../styles.css";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="sticky" className="navbar">
      <Toolbar className="w-100">
        <Box sx={{ flexGrow: 1 }}>
          <IconButton size="small" sx={{ mr: 2 }}>
            <Icon path={mdiAccount} size={1} />
          </IconButton>
        </Box>
        <Box className="fxHide-md">
          <nav sx={{ flexDirection: "row" }} className="link-container">
            <NavLink
              id="navlink"
              to={"/"}
              className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
              }
            >
              <Button variant="contained" disableElevation>
                Home
              </Button>
            </NavLink>
            <NavLink
              id="navlink"
              to={"/screen/responsive"}
              className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
              }
            >
              <Button variant="contained" disableElevation>
                Responsive
              </Button>
            </NavLink>
            <NavLink
              id="navlink"
              to={"/doughnut"}
              className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
              }
            >
              <Button variant="contained" disableElevation>
                Doughnut
              </Button>
            </NavLink>
          </nav>
        </Box>
        <Box className="fxHide-xs">
          <IconButton>
            <Icon path={mdiMenu} size={1} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
