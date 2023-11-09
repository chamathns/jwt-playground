import React from 'react';
import { Typography, Button, FormControlLabel, Checkbox } from '@mui/material';
import { StyledPaper, StyledTextarea, StyledContainer, StyledButtonContainer } from './AppStyles';

function Decoded({
    jwt,
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
                <StyledTextarea
                    minRows={3}
                    value={JSON.stringify(parsedHeader, null, 2)}
                    onChange={handleHeaderChange}
                />
            </StyledContainer>

            <StyledContainer>
                <Typography variant="h6">PAYLOAD: DATA</Typography>
                <StyledTextarea
                    minRows={3}
                    value={JSON.stringify(parsedPayload, null, 2)}
                    onChange={handlePayloadChange}
                />
            </StyledContainer>

            <StyledContainer>
                <Typography variant="h6">VERIFY SIGNATURE</Typography>
                <Typography component="div" gutterBottom>
                    HMACSHA256(
                </Typography>
                <Typography component="div" gutterBottom>
                    {"  "}base64UrlEncode(header) + "." +
                </Typography>
                <Typography component="div" gutterBottom>
                    {"  "}base64UrlEncode(payload),
                </Typography>
                <StyledTextarea
                    minRows={1}
                    placeholder="your-256-bit-secret"
                    value={secretKey}
                    onChange={handleSecretKeyChange}
                />
                <Typography component="div" gutterBottom>
                    {"  "})
                </Typography>
                {/* <FormControlLabel
                    control={
                        <Checkbox
                            checked={isBase64Encoded}
                            onChange={handleToggleBase64}
                        />
                    }
                    label="secret base64 encoded"
                /> */}
            </StyledContainer>
        </StyledPaper>
    );
}

export default Decoded;
