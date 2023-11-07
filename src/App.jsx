import React, { useState } from 'react';
import { Divider, Typography, Grid, CssBaseline } from '@mui/material';
import Encoded from './Encoded';
import Decoded from './Decoded';
import Navbar from './Navbar';
import { StyledPaper, StyledButton, BackgroundDiv } from './AppStyles';

function App() {
  const [jwt, setJwt] = useState("");
  const [decodedHeader, setDecodedHeader] = useState("");
  const [decodedPayload, setDecodedPayload] = useState("");

  const handleJwtChange = (event) => {
    const jwtValue = event.target.value;
    setJwt(jwtValue);
    const parts = jwtValue.split(".");
    if (parts.length === 3) {
      setDecodedHeader(atob(parts[0]));
      setDecodedPayload(atob(parts[1]));
    } else {
      setDecodedHeader("");
      setDecodedPayload("");
    }
  };

  const handleClearClick = () => {
    setJwt("");
    setDecodedHeader("");
    setDecodedPayload("");
  };

  return (
    <>
    <BackgroundDiv>
      <CssBaseline />
      <Navbar />
    </BackgroundDiv>
    <Divider sx={{ my: 2 }} />
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <StyledPaper elevation={3}>
        <Typography variant="h4" gutterBottom>Encoded</Typography>
          <Encoded jwt={jwt} handleJwtChange={handleJwtChange} />
          <StyledButton variant="contained" onClick={handleClearClick}>Clear</StyledButton>
        </StyledPaper>
      </Grid>
      <Grid item xs={12} md={6}>
        <StyledPaper elevation={3}>
        <Typography variant="h4" gutterBottom>Decoded</Typography>
          <Decoded decodedHeader={decodedHeader} decodedPayload={decodedPayload} />
        </StyledPaper>
      </Grid>
    </Grid>
    </>
  );
}

export default App;