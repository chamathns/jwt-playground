import { AppBar, Toolbar, Typography } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          JWT.IO allows you to decode, verify and generate JWT.
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;