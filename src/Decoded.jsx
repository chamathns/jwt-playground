import React from 'react';
import { Typography } from '@mui/material';
import { StyledPaper, StyledTextarea } from './AppStyles';

function Decoded({ decodedHeader, decodedPayload, handleHeaderChange, handlePayloadChange }) {
    const parsedHeader = decodedHeader ? JSON.parse(decodedHeader) : {};
    const parsedPayload = decodedPayload ? JSON.parse(decodedPayload) : {};

    return (
        <StyledPaper elevation={3}>
            <StyledPaper>
                <Typography variant="h6">HEADER: ALGORITHM & TOKEN TYPE</Typography>
                <StyledTextarea
                    minRows={3}
                    value={JSON.stringify(parsedHeader, null, 2)}
                    onChange={handleHeaderChange}
                />
            </StyledPaper>

            <StyledPaper>
                <Typography variant="h6">PAYLOAD: DATA</Typography>
                <StyledTextarea
                    minRows={3}
                    value={JSON.stringify(parsedPayload, null, 2)}
                    onChange={handlePayloadChange}
                />
            </StyledPaper>
        </StyledPaper>
    );
}

export default Decoded;