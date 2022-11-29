// * MUI
import { AppBar, Toolbar, Typography } from "@mui/material";

export const Navbar = () => {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar disableGutters>
        <Typography variant="h6" noWrap component="div" sx={{ ml: 2, color: "#0294cc", fontWeight: 700, fontSize: "1.5rem", lineHeight: 1.5 }}>
          GIPHY
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
