import { Typography, TextField } from "@oxygen-ui/react";
import { cyan } from '@mui/material/colors';
import { StyledContainer } from './AppStyles';

const algorithmNames = {
    'HS256': 'HMACSHA256',
    'HS384': 'HMACSHA384',
    'HS512': 'HMACSHA512',
    'RS256': 'RSASHA256',
    'RS384': 'RSASHA384',
    'RS512': 'RSASHA512',
    'ES256': 'ECDSASHA256',
    'ES384': 'ECDSASHA384',
    'ES512': 'ECDSASHA512',
  };

function VerifySignature({ algorithm, secretKey, handleSecretKeyChange }) {
  return (
    <StyledContainer>
      <Typography variant="h6" style={{ marginBottom: '10px' }}>VERIFY SIGNATURE</Typography>
      <Typography component="div" gutterBottom sx={{ color: cyan[500], fontFamily: 'Menlo' }}>
        {algorithmNames[algorithm]}(
      </Typography>
      <Typography component="div" gutterBottom style={{ marginLeft: '20px' }} sx={{ color: cyan[500], fontFamily: 'Menlo' }}>
        base64UrlEncode(header) + "."
      </Typography>
      <Typography component="div" gutterBottom style={{ marginLeft: '20px' }} sx={{ color: cyan[500], fontFamily: 'Menlo' }}>
        base64UrlEncode(payload),
      </Typography>
      <TextField
        minRows={1}
        value={secretKey}
        onChange={handleSecretKeyChange}
        placeholder="your-256-bit-secret"
        variant="outlined"
        style={{ marginLeft: '20px', width: '50%' }}
        InputProps={{
          style: { color: cyan[500], fontFamily: 'monospace' },
        }}
      />
      <Typography component="div" gutterBottom sx={{ color: cyan[500], fontFamily: 'Menlo' }}>
        )
      </Typography>
    </StyledContainer>
  );
}

export default VerifySignature;