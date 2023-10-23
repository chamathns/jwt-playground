import React from 'react';
import { TextareaAutosize, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)({
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
});

const StyledTextarea = styled(TextareaAutosize)({
    width: '100%',
    padding: '10px',
    marginTop: '10px',
    boxSizing: 'border-box',
    fontSize: '16px',
    fontFamily: 'monospace',
    borderRadius: '5px',
    border: '1px solid #ccc',
    '&:focus': {
        outline: 'none',
        border: '1px solid #0077ff',
    },
});

function Encoded({ jwt, handleJwtChange }) {
        return (
                <StyledPaper elevation={3}>
                        {/* <Typography variant="h4" gutterBottom>Encoded</Typography> */}
                        <StyledTextarea 
                                minRows={10} 
                                onChange={handleJwtChange} 
                                placeholder="Paste a token here..."
                                value={jwt}
                        />
                </StyledPaper>
        );
}

export default Encoded;