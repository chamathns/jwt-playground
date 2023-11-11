import React from 'react';
import { TextField } from '@oxygen-ui/react';
import { StyledPaper } from './AppStyles';
import { blueGrey } from '@mui/material/colors';

function Encoded({ jwt, handleJwtChange }) {
        return (
                <StyledPaper elevation={3}>
                        <TextField
                                multiline
                                minRows={10}
                                value={jwt}
                                onChange={handleJwtChange}
                                placeholder="Paste a token here..."
                                variant="standard"
                                fullWidth
                                InputProps={{
                                        style: { color: blueGrey[500], fontFamily: 'Menlo' },
                                }}
                        />
                </StyledPaper>
        );
}

export default Encoded;