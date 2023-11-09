import React, { useState, useEffect } from 'react';
import { Divider, Typography, Grid, CssBaseline } from '@mui/material';
import Encoded from './Encoded';
import Decoded from './Decoded';
import Navbar from './Navbar';
import AlgorithmSelect from './AlgorithmSelect';
import { BackgroundDiv, StyledPaper, StyledButton } from './AppStyles';
import { KJUR } from 'jsrsasign';

function App() {
  const [jwt, setJwt] = useState("");
  const [decodedHeader, setDecodedHeader] = useState("");
  const [decodedPayload, setDecodedPayload] = useState("");
  const [algorithm, setAlgorithm] = useState("HS256");
  const [secretKey, setSecretKey] = useState('your-256-bit-secret');
  const [isBase64Encoded, setIsBase64Encoded] = useState(false);
  const [isSignatureValid, setIsSignatureValid] = useState(false);

  useEffect(() => {
    verifyAndSetJwt(jwt);
  }, [jwt]);

  useEffect(() => {
    signAndSetJwt(decodedHeader, decodedPayload);
  }, [decodedHeader, decodedPayload, secretKey]);

  const handleJwtChange = (event) => {
    const newJwt = event.target.value;
    verifyAndSetJwt(newJwt);
  };

  const handleAlgorithmChange = (event) => {
    setAlgorithm(event.target.value);
  };

  const verifyAndSetJwt = (newJwt) => {
    setJwt(newJwt);
    const parts = newJwt.split('.');
    if (parts.length === 3) {
      setDecodedHeader(atob(parts[0]));
      setDecodedPayload(atob(parts[1]));
      setIsSignatureValid(KJUR.jws.JWS.verify(newJwt, secretKey, [algorithm]));
    }
  };

  const signAndSetJwt = (header, payload) => {
    if (header && payload) {
      try {
        const newJwt = KJUR.jws.JWS.sign(
          algorithm,
          JSON.parse(header),
          JSON.parse(payload),
          secretKey
        );
        setJwt(newJwt);
      } catch (error) {
        console.error('Error signing JWT', error);
        setJwt(error);
        setIsSignatureValid(false);
      }
    }
  };

  const handleClearClick = () => {
    setJwt("");
    setDecodedHeader("");
    setDecodedPayload("");
    setIsSignatureValid(false);
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
          {jwt && (
          <Typography 
            variant="h5" 
            align="center" 
            style={{ color: isSignatureValid ? "green" : "red" }}
          >
            {isSignatureValid ? "Signature Verified" : "Invalid Signature"}
          </Typography>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledPaper elevation={3}>
            <Typography variant="h4" gutterBottom>Decoded</Typography>
            <Decoded 
              jwt={jwt}
              decodedHeader={decodedHeader}
              decodedPayload={decodedPayload}
              handleHeaderChange={(e) => setDecodedHeader(e.target.value)}
              handlePayloadChange={(e) => setDecodedPayload(e.target.value)}
              secretKey={secretKey}
              handleSecretKeyChange={(e) => setSecretKey(e.target.value)}
              isBase64Encoded={isBase64Encoded}
              handleToggleBase64={() => setIsBase64Encoded(!isBase64Encoded)}
            />
          </StyledPaper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
