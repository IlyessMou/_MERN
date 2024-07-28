import './App.css';
import { useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);

  function handleClick(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response => response.json())
    .then(response => setPokemon(response.results));
  }

  return (
    <div className="App">
      <h1>pokemon List! 🐉 </h1>
      <button onClick={handleClick}> Fetch Pokemon</button>
      <ul>
        {pokemon.map((pokemon, i) => {
          return <li key={i}>{pokemon.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;