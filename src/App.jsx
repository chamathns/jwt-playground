import React, { useState } from 'react';
import { TextField, TextareaAutosize, Paper, Button, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Encoded from './Encoded';
import Decoded from './Decoded';

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
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Encoded jwt={jwt} handleJwtChange={handleJwtChange} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Decoded decodedHeader={decodedHeader} decodedPayload={decodedPayload} />
      </Grid>
    </Grid>
  );
}

export default App;