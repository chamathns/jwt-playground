import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import Encoded from './Encoded';
import Decoded from './Decoded';
import Navbar from './Navbar';
import AlgorithmSelect from './AlgorithmSelect';
import { BackgroundDiv, StyledPaper, StyledButton } from './AppStyles';
import { KJUR } from 'jsrsasign';
import { ThemeProvider } from "@oxygen-ui/react/theme";
import { AsgardeoTheme } from "./theme.ts";
import Grid from "@oxygen-ui/react/Grid";
import Typography from "@oxygen-ui/react/Typography";
import Divider from "@oxygen-ui/react/Divider";
import { INITIAL_JWT } from './constants.js';


function App() {
  const [jwt, setJwt] = useState(INITIAL_JWT);
  const [decodedHeader, setDecodedHeader] = useState("");
  const [decodedPayload, setDecodedPayload] = useState("");
  const [algorithm, setAlgorithm] = useState("HS256");
  const [secretKey, setSecretKey] = useState('your-256-bit-secret');
  const [isBase64Encoded, setIsBase64Encoded] = useState(false);
  const [isSignatureValid, setIsSignatureValid] = useState(false);
  const [isHeaderValid, setIsHeaderValid] = useState(true);
  const [isPayloadValid, setIsPayloadValid] = useState(true);

  useEffect(() => {
    if (isHeaderValid && isPayloadValid) {
      verifyAndSetJwt(jwt);
    }
  }, [jwt]);

  useEffect(() => {
    signAndSetJwt(decodedHeader, decodedPayload);
  }, [decodedHeader, decodedPayload, secretKey]);

  const handleJwtChange = (event) => {
    if (isHeaderValid && isPayloadValid) {
      const newJwt = event.target.value;
      verifyAndSetJwt(newJwt);
    }
  };

  const handleAlgorithmChange = (event) => {
    setAlgorithm(event.target.value);
  };

  const handleHeaderChange = (e) => {
    const newHeader = e.target.value;
    setDecodedHeader(newHeader);
    try {
      JSON.parse(newHeader);
      setIsHeaderValid(true);
    } catch (error) {
      console.error('Invalid JSON:', error);
      setIsHeaderValid(false);
      setJwt('');
    }
  };

  const handlePayloadChange = (e) => {
    const newPayload = e.target.value;
    setDecodedPayload(newPayload);
    try {
      JSON.parse(newPayload);
      setIsPayloadValid(true);
    } catch (error) {
      console.error('Invalid JSON:', error);
      setIsPayloadValid(false);
      setJwt('');
    }
  };

  useEffect(() => {
    if (jwt) {
      const parts = jwt.split('.');
      const header = JSON.parse(atob(parts[0]));
      header.alg = algorithm;
      const newHeader = btoa(JSON.stringify(header));
      const newJwt = `${newHeader}.${parts[1]}.${parts[2]}`;
      setJwt(newJwt);
    }
  }, [algorithm]);

  const verifyAndSetJwt = (newJwt) => {
    if (!isHeaderValid) {
      return;
    }
    setJwt(newJwt);
    const parts = newJwt.split('.');
    if (parts.length === 3) {
      const decodedHeaderStr = atob(parts[0]);
      setDecodedHeader(decodedHeaderStr);
      const decodedHeader = JSON.parse(decodedHeaderStr);
  
      setDecodedPayload(atob(parts[1]));
  
      const jwtAlgorithm = decodedHeader.alg;
      
      const acceptedAlgorithms = ['HS256', 'HS384', 'HS512'];
      if (acceptedAlgorithms.includes(jwtAlgorithm)) {
        setIsSignatureValid(KJUR.jws.JWS.verifyJWT(newJwt, secretKey, {alg: [jwtAlgorithm]}));
      } else {
        console.error(`Algorithm '${jwtAlgorithm}' is not accepted.`);
        setIsSignatureValid(false);
      }
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
    <ThemeProvider theme={ AsgardeoTheme } defaultMode="light" modeStorageKey="console-oxygen-mode">
      <BackgroundDiv>
          <CssBaseline />
          <Navbar />
        <AlgorithmSelect algorithm={algorithm} handleAlgorithmChange={handleAlgorithmChange} />
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={2} sx={{ margin: '0 auto', maxWidth: '80%' }}>
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
                handleHeaderChange={ handleHeaderChange }
                handlePayloadChange={ handlePayloadChange }
                secretKey={secretKey}
                handleSecretKeyChange={(e) => setSecretKey(e.target.value)}
                isBase64Encoded={isBase64Encoded}
                handleToggleBase64={() => setIsBase64Encoded(!isBase64Encoded)}
                algorithm={algorithm}
                isHeaderValid={isHeaderValid}
                setIsHeaderValid={setIsHeaderValid}
                isPayloadValid={isPayloadValid}
                setIsPayloadValid={setIsPayloadValid}
              />
            </StyledPaper>
          </Grid>
        </Grid>
        </BackgroundDiv>
    </ThemeProvider>
    </>
  );
}

export default App;
