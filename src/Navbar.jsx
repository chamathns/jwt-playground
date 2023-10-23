import React from 'react';
import { Button, Typography, Box, Paper } from '@mui/material';
import { Warning } from '@mui/icons-material';

export default function Navbar() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }}>
            <Paper elevation={3} sx={{ p: 4, width: '80%', maxWidth: 600, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    JSON Web Tokens
                </Typography>
                <Typography variant="h6">
                    JSON Web Tokens are an open, industry standard <strong>RFC 7519</strong> method for representing
                    claims securely between two parties.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    JWT.IO allows you to decode, verify and generate JWT.
                </Typography>
                <Box sx={{ mt: 4 }}>
                    <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                        Learn more about JWT
                    </Button>
                    <Button variant="outlined" color="primary">
                        See JWT Libraries
                    </Button>
                </Box>
                <Box sx={{ mt: 4 }}>
                    <Paper elevation={0} variant="outlined" sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                        <Warning color="error" />
                        <Typography variant="body2" sx={{ ml: 2 }}>
                            Warning: JWTs are credentials, which can grant access to resources. Be careful where you
                            paste them! We do not record tokens, all validation and debugging is done on the client
                            side.
                        </Typography>
                    </Paper>
                </Box>
            </Paper>
        </Box>
    );
}
