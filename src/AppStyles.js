import { styled } from '@mui/system';
import { Paper, Button, TextareaAutosize } from '@mui/material';

export const BackgroundDiv = styled('div')({
    background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
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