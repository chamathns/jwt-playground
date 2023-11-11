import { styled } from '@mui/system';
import { TextareaAutosize } from '@mui/material';
import { Button, Paper } from '@oxygen-ui/react';

export const BackgroundDiv = styled('div')({
  background: 'radial-gradient(circle at 50% 50%,rgba(243,115,33,.21836485) 0,rgba(245,246,246,.38559174) 35%,rgba(245,246,246,1) 100%), radial-gradient(circle at 50% 50%,rgba(144,37,142,.123433123) 0,rgba(245,246,246,.38559174) 47%,rgba(245,246,246,1) 100%)',
  width: '100vw',
});

export const StyledPaper = styled(Paper)({
  padding: '20px',
  marginBottom: '20px',
  borderRadius: '10px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
});

export const StyledTextarea = styled(TextareaAutosize)({
  width: '100%',
  padding: '10px',
  marginTop: '10px',
  boxSizing: 'border-box',
  fontSize: '16px',
  fontFamily: 'monospace',
  borderRadius: '5px',
  border: '1px solid #ccc',
  '&:focus': {
    outline: 'none',
    border: '1px solid #0077ff',
  },
});

export const StyledButton = styled(Button)({
  marginTop: '10px',
  backgroundColor: '#0077ff',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#0066cc',
  },
});

export const StyledContainer = styled('div')({
  marginBottom: '20px',
  '&:last-child': {
    marginBottom: '0',
  },
});