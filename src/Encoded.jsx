import React from 'react';
import { TextareaAutosize, Typography } from '@mui/material';

function Encoded({ jwt, handleJwtChange }) {
  return (
    <div>
      <Typography variant="h4">Encoded</Typography>
      <TextareaAutosize 
        minRows={10} 
        onChange={handleJwtChange} 
        placeholder="Paste a token here..."
        value={jwt}
        style={{width: '100%'}}
      />
    </div>
  );
}

export default Encoded;
