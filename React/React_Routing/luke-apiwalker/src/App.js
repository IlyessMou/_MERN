import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Character from './components/Character';
import Planet from './components/Planet';
import SearchForm from './components/SearchForm';

const App = () => {
  return (
    <div>
      <SearchForm />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people/:id" element={<Character />} />
        <Route path="/planets/:id" element={<Planet />} />
      </Routes>
    </div>
  );
};

export default App;
