import React from 'react';
import { Select, MenuItem, Box, Typography } from '@mui/material';

function AlgorithmSelect({ algorithm, handleAlgorithmChange }) {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" margin={2} pt={2}>
            <Typography variant="body1">Algorithm: </Typography>
            <Select value={algorithm} onChange={handleAlgorithmChange} style={{ marginLeft: '10px' }}>
                <MenuItem value="HS256">HS256</MenuItem>
                <MenuItem value="HS384">HS384</MenuItem>
                <MenuItem value="HS512">HS512</MenuItem>
                <MenuItem value="RS256" disabled>RS256</MenuItem>
                <MenuItem value="RS384" disabled>RS384</MenuItem>
                <MenuItem value="RS512" disabled>RS512</MenuItem>
                <MenuItem value="ES256" disabled>ES256</MenuItem>
                <MenuItem value="ES384" disabled>ES384</MenuItem>
                <MenuItem value="ES512" disabled>ES512</MenuItem>
            </Select>
        </Box>
    );
}

export default AlgorithmSelect;