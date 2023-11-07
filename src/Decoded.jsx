import React from 'react';
import { Typography } from '@mui/material';
import { StyledPaper } from './AppStyles';

function Decoded({ decodedHeader, decodedPayload }) {
    const parsedHeader = decodedHeader ? JSON.parse(decodedHeader) : {};
    const parsedPayload = decodedPayload ? JSON.parse(decodedPayload) : {};

    return (
        <StyledPaper elevation={3}>

            <StyledPaper>
                <Typography variant="h6">HEADER: ALGORITHM & TOKEN TYPE</Typography>
                <pre>{JSON.stringify(parsedHeader, null, 2)}</pre>
            </StyledPaper>

            <StyledPaper>
                <Typography variant="h6">PAYLOAD: DATA</Typography>
                <pre>{JSON.stringify(parsedPayload, null, 2)}</pre>
            </StyledPaper>
        </StyledPaper>
    );
}

export default Decoded;