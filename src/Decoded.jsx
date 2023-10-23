import React from 'react';
import { Typography, Paper, Divider } from '@mui/material';

function Decoded({ decodedHeader, decodedPayload }) {
    const parsedHeader = decodedHeader ? JSON.parse(decodedHeader) : {};
    const parsedPayload = decodedPayload ? JSON.parse(decodedPayload) : {};

    return (
        <Paper elevation={3} style={{ padding: '20px' }}>
            {/* <Typography variant="h4" gutterBottom>Decoded</Typography> */}
            {/* <Divider style={{ margin: '10px 0' }} /> */}

            {/* HEADER */}
            <Paper style={{ marginBottom: '16px', padding: '10px' }}>
                <Typography variant="h6">HEADER: ALGORITHM & TOKEN TYPE</Typography>
                <pre>{JSON.stringify(parsedHeader, null, 2)}</pre>
            </Paper>

            {/* PAYLOAD */}
            <Paper style={{ marginBottom: '16px', padding: '10px' }}>
                <Typography variant="h6">PAYLOAD: DATA</Typography>
                <pre>{JSON.stringify(parsedPayload, null, 2)}</pre>
            </Paper>
        </Paper>
    );
}

export default Decoded;