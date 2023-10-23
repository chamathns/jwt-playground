import React from 'react';
import { Container, Grid } from '@mui/material';
import Encoded from './Encoded';
import Decoded from './Decoded';

function MainContent() {
    return (
        <Container style={{ marginTop: '24px' }}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Encoded />
                </Grid>
                <Grid item xs={6}>
                    <Decoded />
                </Grid>
            </Grid>
        </Container>
    );
}

export default MainContent;
