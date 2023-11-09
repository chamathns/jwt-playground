import React from 'react';
import { Typography, FormControlLabel, Checkbox } from '@mui/material';
import { StyledPaper, StyledTextarea, StyledContainer } from './AppStyles';

const JSONTextarea = ({ value, onChange }) => (
  <StyledTextarea
    minRows={3}
    value={JSON.stringify(value, null, 2)}
    onChange={onChange}
  />
);

function Decoded({
    decodedHeader,
    decodedPayload,
    handleHeaderChange,
    handlePayloadChange,
    secretKey,
    handleSecretKeyChange,
    isBase64Encoded,
    handleToggleBase64,
}) {
    const parsedHeader = decodedHeader ? JSON.parse(decodedHeader) : {};
    const parsedPayload = decodedPayload ? JSON.parse(decodedPayload) : {};

    return (
        <StyledPaper elevation={3}>
            <StyledContainer>
                <Typography variant="h6">HEADER: ALGORITHM & TOKEN TYPE</Typography>
                <JSONTextarea value={parsedHeader} onChange={handleHeaderChange} />
            </StyledContainer>

            <StyledContainer>
                <Typography variant="h6">PAYLOAD: DATA</Typography>
                <JSONTextarea value={parsedPayload} onChange={handlePayloadChange} />
            </StyledContainer>

            <StyledContainer>
                <Typography variant="h6" style={{ marginBottom: '10px' }}>VERIFY SIGNATURE</Typography>
                <Typography component="div" gutterBottom>
                    HMACSHA256(
                </Typography>
                <Typography component="div" gutterBottom style={{ marginLeft: '20px' }}>
                    base64UrlEncode(header) + "."
                </Typography>
                <Typography component="div" gutterBottom style={{ marginLeft: '20px' }}>
                    base64UrlEncode(payload),
                </Typography>
                <StyledTextarea
                    minRows={1}
                    placeholder="your-256-bit-secret"
                    value={secretKey}
                    onChange={handleSecretKeyChange}
                    style={{ marginLeft: '20px', width: '50%' }}
                />
                <Typography component="div" gutterBottom>
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
