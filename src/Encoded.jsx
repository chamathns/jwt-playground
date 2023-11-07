import React from 'react';
import { StyledPaper, StyledTextarea } from './AppStyles';

function Encoded({ jwt, handleJwtChange }) {
        return (
                <StyledPaper elevation={3}>
                        <StyledTextarea 
                                minRows={10} 
                                onChange={handleJwtChange} 
                                placeholder="Paste a token here..."
                                value={jwt}
                        />
                </StyledPaper>
        );
}

export default Encoded;