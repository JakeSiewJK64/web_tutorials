import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";
import Icon from "@mdi/react";
import { mdiAccount, mdiMenu } from "@mdi/js";

import "../../styles.css";
import "./navbar.css";

export default function Navbar() {
  return (
    <AppBar position="sticky" className="navbar">
      <Toolbar className="w-100">
        <Box sx={{ flexGrow: 1 }}>
          <IconButton size="small" sx={{ mr: 2 }}>
            <Icon path={mdiAccount} size={1} />
          </IconButton>
        </Box>
        <Box className="fxShow-md" sx={{ display: "flex" }}>
          <Typography color={"black"} sx={{ padding: "5px" }}>
            News
          </Typography>
          <Button>Button</Button>
        </Box>
        <Box className="fxShow-xs">
          <IconButton>
            <Icon path={mdiMenu} size={1} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
