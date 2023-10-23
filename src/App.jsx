import React, { useState } from 'react';
import { TextField, TextareaAutosize, Paper, Divider, Button, Typography, Grid, CssBaseline } from '@mui/material';
import { styled } from '@mui/system';
import Encoded from './Encoded';
import Decoded from './Decoded';
import Navbar from './Navbar';

const StyledPaper = styled(Paper)({
  padding: '20px',
  marginBottom: '20px',
  borderRadius: '10px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
});

const StyledTextarea = styled(TextareaAutosize)({
  width: '100%',
  padding: '10px',
  marginTop: '10px',
  boxSizing: 'border-box',
  fontSize: '16px',
  fontFamily: 'monospace',
  borderRadius: '5px',
  border: '1px solid #ccc',
  '&:focus': {
    outline: 'none',
    border: '1px solid #0077ff',
  },
});

const StyledButton = styled(Button)({
  marginTop: '10px',
  backgroundColor: '#0077ff',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#0066cc',
  },
});

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
    <div style={{ background: 'linear-gradient(to right, #C33764, #1D2671)', width: '100vw' }}>
            <CssBaseline />
            <Navbar />
    </div>
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