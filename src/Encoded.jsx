import React from 'react';
import { TextField } from '@mui/material';
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
                                variant="outlined"
                                fullWidth
                                InputProps={{
                                        style: { color: blueGrey[500], fontFamily: 'Menlo' },
                                }}
                        />
                </StyledPaper>
        );
}

export default Encoded;