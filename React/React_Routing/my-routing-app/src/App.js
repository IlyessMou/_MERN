import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import HomePage from './components/HomePage';
import NumberPage from './components/NumberPage';
import TextPage from './components/TextPage';
import StyledTextPage from './components/StyledTextPage';

const NumberOrText = () => {
  const { value } = useParams();
  return isNaN(+value) ? <TextPage word={value} /> : <NumberPage number={value} />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/:word/:color/:bgColor" element={<StyledTextPage />} />
      <Route path="/:value" element={<NumberOrText />} />
    </Routes>
  );
}

export default App;
