import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Warning } from '@mui/icons-material';
import { styled } from '@mui/system';

import { AsgardeoTheme } from "./theme.ts";
import {  Button, Box, ThemeProvider, Divider } from "@oxygen-ui/react";

const DangerZonePaper = styled(Paper)(({ theme }) => ({
    '&.danger-zone': {
      background: 'transparent',
      boxShadow: 'none',
      border: `1px solid ${theme.palette.error.main}`,
      borderRadius: theme.shape.borderRadius,
      '.sub-header': {
        marginTop: '5px',
      },
    },
  }));

export default function Navbar() {
    return (
        <ThemeProvider theme={AsgardeoTheme}>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                p: 4, 
                background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)'
            }}>                
            <Paper elevation={3} sx={{ pt: 2, pb: 4, pl: 4, pr: 4, width: '100%', background: 'transparent', maxWidth: 'hw', textAlign: 'center' }}>
                    <Typography align="center" variant="h4" sx={{pb: 2 ,color: '#DDDDDD', fontFamily: 'Helvetica Neue', fontSize: '2.5rem'}} >
                        JSON Web Tokens
                    </Typography>
                    <Typography variant="h6" sx={{color: '#DDDDDD', fontFamily: 'Helvetica Neue'}}>
                        JSON Web Tokens are an open, industry standard <strong><a href="https://tools.ietf.org/html/rfc7519" target="_blank" rel="noopener noreferrer">RFC 7519</a></strong> method for representing
                        claims securely between two parties.
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="subtitle1" gutterBottom sx={{color: '#DDDDDD'}}>
                        JWT playground allows you to decode and encode JWTs... for now
                    </Typography>
                    <Box sx={{ mt: 4 }}>
                        <Button variant="contained" sx={{ mr: 2,  }}>
                            Learn more about JWT
                        </Button>
                        <Button variant="outlined" color="secondary" sx={{ mr: 2,  }}>
                            See JWT Libraries
                        </Button>
                    </Box>
                    <Box sx={{ mt: 4, background: 'transparent', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                        <DangerZonePaper elevation={0} variant="outlined" className="danger-zone" sx={{ p: 2, background: 'transparent', alignItems: 'center', width: '80%', margin: 'auto' }}>
                            <Typography variant="body2" sx={{mr: 1, verticalAlign: 'bottom', fontFamily: 'Helvetica Neue', color: 'wheat' }}>
                                <Warning color="warning" sx={{mr: 1, verticalAlign: 'bottom'}} />
                                Warning: JWTs are credentials, which can grant access to resources. Be careful where you
                                paste them! We do not record tokens, all validation and debugging is done on the client
                                side.
                            </Typography>
                        </DangerZonePaper>
                    </Box>
                </Paper>
            </Box>
        </ThemeProvider>
    );
}
