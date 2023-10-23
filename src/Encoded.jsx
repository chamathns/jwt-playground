import React from 'react';
import { TextareaAutosize, Typography, Paper } from '@mui/material';

function Encoded({ jwt, handleJwtChange }) {
    return (
        <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
            <Typography variant="h4" gutterBottom>Encoded</Typography>
            <TextareaAutosize 
                minRows={10} 
                onChange={handleJwtChange} 
                placeholder="Paste a token here..."
                value={jwt}
                style={{width: '100%', padding: '10px', marginTop: '10px', boxSizing: 'border-box', fontSize: '16px'}}
            />
        </Paper>
    );
}

export default Encoded;