import { StyledPaperInBox, StyledContainer } from './AppStyles';
import { purple, cyan } from '@mui/material/colors';
import { Typography, TextField } from "@oxygen-ui/react";
import VerifySignature from './VerifySignature';

const JSONTextareaHeader = ({ value, onChange, isHeaderValid }) => (
    <TextField
      multiline
      minRows={3}
      value={isHeaderValid ? JSON.stringify(value, null, 2) : value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      InputProps={{
        style: { 
            color: "#fb015b", 
            fontFamily: 'Menlo', 
            background: isHeaderValid ? '' : 'rgba(255, 192, 203, 0.5)'
        },
      }}
    />
  );

const JSONTextareaPayload = ({ value, onChange, isPayloadValid }) => (
    <TextField
      multiline
      minRows={3}
      value={isPayloadValid ? JSON.stringify(value, null, 2) : value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      InputProps={{
        style: { 
            color: purple[500], 
            fontFamily: 'Menlo', 
            background: isPayloadValid ? '' : 'rgba(255, 192, 203, 0.5)'
        },      }}
    />
  );

function Decoded({
    decodedHeader,
    decodedPayload,
    handleHeaderChange,
    handlePayloadChange,
    secretKey,
    handleSecretKeyChange,
    isBase64Encoded,
    handleToggleBase64,
    algorithm,
    isHeaderValid,
    setIsHeaderValid,
    isPayloadValid,
    setIsPayloadValid,
    isEncodedHeaderValid,
    isEncodedPayloadValid
}) {
    let parsedHeader = {};
    try {
        if (isEncodedHeaderValid) {
            parsedHeader = decodedHeader ? JSON.parse(decodedHeader) : {};
            setIsHeaderValid(true);
        }
    } catch (error) {
        parsedHeader = decodedHeader;
        setIsHeaderValid(false);
    }

    let parsedPayload = {};
    try {
        if (isEncodedPayloadValid) {
            parsedPayload = decodedPayload ? JSON.parse(decodedPayload) : {};
            setIsPayloadValid(true);
        }
    }
    catch (error) {
        parsedPayload = decodedPayload;    
        setIsPayloadValid(false);
    }
    return (
        <StyledPaperInBox elevation={3}>
            <StyledContainer>
                <Typography variant="h6">HEADER: <span style={{fontSize: '0.9rem', color: 'gray'}}>ALGORITHM & TOKEN TYPE</span></Typography>
                <JSONTextareaHeader value={parsedHeader} onChange={handleHeaderChange} isHeaderValid={isHeaderValid}/>
            </StyledContainer>

            <StyledContainer>
                <Typography variant="h6">PAYLOAD: <span style={{fontSize: '0.9rem', color: 'gray'}}>DATA</span></Typography>
                <JSONTextareaPayload value={parsedPayload} onChange={handlePayloadChange} isPayloadValid={isPayloadValid} />
            </StyledContainer>

            <VerifySignature algorithm={algorithm} secretKey={secretKey} handleSecretKeyChange={handleSecretKeyChange} />

            {/* <FormControlLabel
                control={
                    <Checkbox
                        checked={isBase64Encoded}
                        onChange={handleToggleBase64}
                    />
                }
                label="secret base64 encoded"
            /> */}
        </StyledPaperInBox>
    );
}

export default Decoded;
