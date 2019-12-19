import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  Icon,
  IconButton,
  Box
} from "@material-ui/core";
function Navbar() {
  const style = {
    textDecoration: "none",
    color: "white"
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Icon>menu</Icon>
          </IconButton>
          <Typography variant="h6">News</Typography>
          <Box ml="auto">
            <Button color="inherit">
              <Link style={style} to="/products">
                Products
              </Link>
            </Button>
            <Button color="inherit">
              <Link style={style} to="/details">
                Details
              </Link>
            </Button>
            <Button color="inherit">
              <Link style={style} to="/carts">
                Carts
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;
