import React, { useState } from 'react';
import { Divider, Typography, Grid, CssBaseline } from '@mui/material';
import Encoded from './Encoded';
import Decoded from './Decoded';
import Navbar from './Navbar';
import { StyledPaper, StyledButton, BackgroundDiv } from './AppStyles';
import { KJUR } from 'jsrsasign';
import AlgorithmSelect from './AlgorithmSelect';

function App() {
  const [jwt, setJwt] = useState("");
  const [decodedHeader, setDecodedHeader] = useState("");
  const [decodedPayload, setDecodedPayload] = useState("");
  const [algorithm, setAlgorithm] = useState("HS256");

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

  const handleAlgorithmChange = (event) => {
    setAlgorithm(event.target.value);
  };

  const handleClearClick = () => {
    setJwt("");
    setDecodedHeader("");
    setDecodedPayload("");
  };

  const handleHeaderChange = (event) => {
    const newHeader = event.target.value;
    setDecodedHeader(newHeader);
  
    const newJwt = KJUR.jws.JWS.sign(
      algorithm,
      JSON.parse(newHeader),
      JSON.parse(decodedPayload),
      "your_secret_key" // Replace this with your actual secret key
    );
    setJwt(newJwt);
  };

  const handlePayloadChange = (event) => {
    const newPayload = event.target.value;
    setDecodedPayload(newPayload);
  
    const newJwt = KJUR.jws.JWS.sign(
      algorithm,
      JSON.parse(decodedHeader),
      JSON.parse(newPayload),
      "your_secret_key" // Replace this with your actual secret key
    );
    setJwt(newJwt);
  };

  return (
    <>
    <BackgroundDiv>
      <CssBaseline />
      <Navbar />
    </BackgroundDiv>
    <AlgorithmSelect algorithm={algorithm} handleAlgorithmChange={handleAlgorithmChange} />
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
        <Decoded 
          decodedHeader={decodedHeader} 
          decodedPayload={decodedPayload} 
          handleHeaderChange={handleHeaderChange} 
          handlePayloadChange={handlePayloadChange} 
        />
        </StyledPaper>
      </Grid>
    </Grid>
    </>
  );
}

export default App;