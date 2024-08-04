import React from 'react';
import { useParams } from 'react-router-dom';

const StyledTextPage = () => {
  const { word, color, bgColor } = useParams();
  return (
    <div style={{ color: color, backgroundColor: bgColor }}>
      <h1>{word}</h1>
    </div>
  );
}

export default StyledTextPage;
