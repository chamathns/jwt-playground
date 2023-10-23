import React, { useState } from 'react';
import Encoded from './Encoded';
import Decoded from './Decoded';

function App() {
  const [jwt, setJwt] = useState("");
  const [decodedHeader, setDecodedHeader] = useState("");
  const [decodedPayload, setDecodedPayload] = useState("");

  const handleJwtChange = (event) => {
    const jwtValue = event.target.value;
    setJwt(jwtValue);
    const parts = jwtValue.split(".");
    if (parts.length === 3) {
      setDecodedHeader(atob(parts[0]));
      setDecodedPayload(atob(parts[1]));
    }
  };

  return (
    <div>
      <Encoded jwt={jwt} handleJwtChange={handleJwtChange} />
      <Decoded decodedHeader={decodedHeader} decodedPayload={decodedPayload} />
    </div>
  );
}

export default App;
