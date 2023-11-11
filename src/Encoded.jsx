import React from 'react';
import { TextField } from '@oxygen-ui/react';
import { StyledPaper } from './AppStyles';
import { blueGrey } from '@mui/material/colors';

function Encoded({ jwt, handleJwtChange, isSignatureValid }) {
        return (
                <StyledPaper elevation={3} sx={{ background: isSignatureValid ? '' : 'rgba(255, 192, 203, 0.5)' }}>
                        <TextField
                                multiline
                                minRows={10}
                                value={jwt}
                                onChange={handleJwtChange}
                                placeholder="Paste a token here..."
                                variant="standard"
                                fullWidth
                                InputProps={{
                                        style: { color: blueGrey[700], fontFamily: 'Menlo' },
                                }}
                        />
                </StyledPaper>
        );
}

export default Encoded;