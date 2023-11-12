import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
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
                pt: 2, pb: 2, pl: 4, pr: 4,
                background: 'linear-gradient(to bottom, rgba(207, 232, 239, 0.4), rgba(250, 240, 230, 0))'
            }}>     

            {/* <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                pt: 2, pb: 2, pl: 4, pr: 4,
                background: 'linear-gradient(to bottom, rgba(167, 194, 204, 1), rgba(250, 240, 230, 0))'
            }}>                */}
            {/* <Paper elevation={3} sx={{ pt: 2, pb: 4, pl: 4, pr: 4, width: '100%', background: 'transparent', maxWidth: 'hw', textAlign: 'center'}}> */}
                    <Typography align="center" variant="h4" sx={{pb: 2, fontFamily: 'Helvetica Neue', fontSize: '2.5rem'}} >
                        JSON Web Tokens
                    </Typography>
                    <Typography variant="h6" sx={{ fontFamily: 'Helvetica Neue'}}>
                        JSON Web Tokens are an open, industry standard <strong><a href="https://tools.ietf.org/html/rfc7519" target="_blank" rel="noopener noreferrer" style={{color: '#ff7300'}}>RFC 7519</a></strong> method for representing
                        claims securely between two parties.
                    </Typography>
                    <Divider sx={{ my: 2, borderColor: 'transparent' }} />
                    <Typography variant="subtitle1" gutterBottom >
                        JWT playground allows you to decode and encode JWTs
                    </Typography>
                    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: 'max-content' }}>
                            <Box sx={{ minWidth: '150px' }}> 
                                <a href="https://dekh.medium.com/the-complete-guide-to-json-web-tokens-jwt-and-token-based-authentication-32501cb5125c" target="_blank" rel="noopener noreferrer">
                                    <Button variant="contained" sx={{ width: '200px' }}>Learn more about JWT</Button>
                                </a>
                            </Box>
                            <Box sx={{ minWidth: '150px', ml: 2 }}> 
                                <Button variant="outlined" color="secondary" sx={{ width: '200px' }}>
                                    See JWT Libraries
                                </Button>
                            </Box>
                        </div>
                    </Box>

                    <Box sx={{ mt: 4, background: 'transparent', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                        <DangerZonePaper elevation={0} variant="outlined" className="danger-zone" sx={{ p: 2, background: 'transparent', alignItems: 'center', width: '80%', margin: 'auto' }}>
                            <Typography variant="body2" sx={{mr: 1, verticalAlign: 'bottom', fontFamily: 'Helvetica Neue', textAlign: 'center'}}>
                                <Warning color="warning" sx={{mr: 1, verticalAlign: 'bottom'}} />
                                Warning: JWTs are credentials, which can grant access to resources. Be careful where you
                                paste them! We do not record tokens, all validation and debugging is done on the client
                                side.
                            </Typography>
                        </DangerZonePaper>
                    </Box>
                {/* </Paper> */}
            </Box>
        </ThemeProvider>
    );
}
