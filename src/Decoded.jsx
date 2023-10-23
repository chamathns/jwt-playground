import React from 'react';
import { Typography, Paper } from '@mui/material';

function Decoded({ decodedHeader, decodedPayload }) {
  return (
    <div>
      <Typography variant="h4">Decoded</Typography>
      <Paper style={{marginBottom: '16px', padding: '16px'}}>
        <Typography variant="h6">HEADER: ALGORITHM & TOKEN TYPE</Typography>
        <pre>{decodedHeader}</pre>
      </Paper>
      <Paper style={{marginBottom: '16px', padding: '16px'}}>
        <Typography variant="h6">PAYLOAD: DATA</Typography>
        <pre>{decodedPayload}</pre>
      </Paper>
      <Paper style={{padding: '16px'}}>
        <Typography variant="h6">VERIFY SIGNATURE</Typography>
        {/* Code for the verify signature section here */}
      </Paper>
    </div>
  );
}

export default Decoded;
