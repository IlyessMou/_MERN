import React from 'react';
import obiWanImage from './obi-wan.jpg'; 

const ErrorMessage = () => {
  return (
    <div>
      <h1>These aren't the droids you're looking for</h1>
      <img src={obiWanImage} alt="Obi-Wan Kenobi" style={{ width: '700px' }}/>
    </div>
  );
};

export default ErrorMessage;
