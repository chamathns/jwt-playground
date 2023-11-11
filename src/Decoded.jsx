import React from 'react';
import { Typography, FormControlLabel, TextField, Checkbox } from '@mui/material';
import { StyledPaper, StyledTextarea, StyledContainer } from './AppStyles';
import { pink, purple, cyan } from '@mui/material/colors';

// (possible exports: amber, blue, blueGrey, brown, common, cyan, deepOrange, deepPurple, green, grey, indigo, lightBlue, lightGreen, lime, orange, pink, purple, red, teal, yellow)

const JSONTextareaHeader = ({ value, onChange }) => (
    <TextField
      multiline
      minRows={3}
      value={JSON.stringify(value, null, 2)}
      onChange={onChange}
      variant="outlined"
      fullWidth
      InputProps={{
        style: { color: "#fb015b", fontFamily: 'Menlo' },
      }}
    />
  );

const JSONTextareaPayload = ({ value, onChange }) => (
    <TextField
      multiline
      minRows={3}
      value={JSON.stringify(value, null, 2)}
      onChange={onChange}
      variant="outlined"
      fullWidth
      InputProps={{
        style: { color: purple[500], fontFamily: 'Menlo' },
      }}
    />
  );



const algorithmNames = {
    'HS256': 'HMACSHA256',
    'HS384': 'HMACSHA384',
    'HS512': 'HMACSHA512',
    'RS256': 'RSASHA256',
    'RS384': 'RSASHA384',
    'RS512': 'RSASHA512',
    'ES256': 'ECDSASHA256',
    'ES384': 'ECDSASHA384',
    'ES512': 'ECDSASHA512',
  };

function Decoded({
    decodedHeader,
    decodedPayload,
    handleHeaderChange,
    handlePayloadChange,
    secretKey,
    handleSecretKeyChange,
    isBase64Encoded,
    handleToggleBase64,
    algorithm
}) {
    const parsedHeader = decodedHeader ? JSON.parse(decodedHeader) : {};
    const parsedPayload = decodedPayload ? JSON.parse(decodedPayload) : {};

    return (
        <StyledPaper elevation={3}>
            <StyledContainer>
                <Typography variant="h6">HEADER: ALGORITHM & TOKEN TYPE</Typography>
                <JSONTextareaHeader value={parsedHeader} onChange={handleHeaderChange} />
            </StyledContainer>

            <StyledContainer>
                <Typography variant="h6">PAYLOAD: DATA</Typography>
                <JSONTextareaPayload value={parsedPayload} onChange={handlePayloadChange} />
            </StyledContainer>

            <StyledContainer>
                <Typography variant="h6" style={{ marginBottom: '10px' }}>VERIFY SIGNATURE</Typography>
                <Typography component="div" gutterBottom sx={{ color: cyan[500], fontFamily: 'Menlo' }}>
                    {algorithmNames[algorithm]}(
                </Typography>
                <Typography component="div" gutterBottom style={{ marginLeft: '20px' }} sx={{ color: cyan[500], fontFamily: 'Menlo' }}>
                    base64UrlEncode(header) + "."
                </Typography>
                <Typography component="div" gutterBottom style={{ marginLeft: '20px' }} sx={{ color: cyan[500], fontFamily: 'Menlo' }}>
                    base64UrlEncode(payload),
                </Typography>
            
                <TextField
                    multiline
                    minRows={1}
                    value={secretKey}
                    onChange={handleSecretKeyChange}
                    placeholder="your-256-bit-secret"
                    variant="outlined"
                    style={{ marginLeft: '20px', width: '50%' }}
                    InputProps={{
                        style: { color: cyan[500], fontFamily: 'monospace' },
                      }}
                />
                <Typography component="div" gutterBottom sx={{ color: cyan[500], fontFamily: 'Menlo' }}>
                    )
                </Typography>
            </StyledContainer>

            {/* <FormControlLabel
                control={
                    <Checkbox
                        checked={isBase64Encoded}
                        onChange={handleToggleBase64}
                    />
                }
                label="secret base64 encoded"
            /> */}
        </StyledPaper>
    );
}

export default Decoded;
