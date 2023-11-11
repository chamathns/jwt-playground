import React from 'react';
import { Button, Typography, Box, Paper, Divider } from '@mui/material';
import { Warning } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
    },
    typography: {
      fontFamily: 'Arial',
    },
  });

export default function Navbar() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', background: 'transparent', flexDirection: 'column', alignItems: 'center', p: 4 }}>
                <Paper elevation={3} sx={{ p: 4, width: '100%', background: 'transparent', maxWidth: 'hw', textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom sx={{color: '#DDDDDD', fontFamily: '-apple-system'}}>
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
                        <Button variant="contained" color='secondary' sx={{ mr: 2, color: '#DDDDDD' }}>
                            Learn more about JWT
                        </Button>
                        <Button variant="outlined" color="secondary" sx={{ mr: 2, color: '#DDDDDD' }}>
                            See JWT Libraries
                        </Button>
                    </Box>
                    <Box sx={{ mt: 4, background: 'transparent', alignItems: 'center' }}>
                        <Paper elevation={0} variant="outlined" sx={{ p: 2, background: 'transparent', alignItems: 'center', width: '100%' }}>
                            <Typography variant="body2" sx={{ ml: 2, textAlign: 'center', fontFamily: 'Helvetica Neue', color: 'wheat' }}>
                                <Warning color="warning" sx={{mr: 1, verticalAlign: 'bottom'}} />
                                Warning: JWTs are credentials, which can grant access to resources. Be careful where you
                                paste them! We do not record tokens, all validation and debugging is done on the client
                                side.
                            </Typography>
                        </Paper>
                    </Box>
                </Paper>
            </Box>
        </ThemeProvider>
    );
}
