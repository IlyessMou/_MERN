import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [homeworld, setHomeworld] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/${id}/`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setCharacter(data);
        fetchHomeworld(data.homeworld);
      } catch (error) {
        setError(true);
      }
    };

    const fetchHomeworld = async (homeworldUrl) => {
        try {
          const response = await fetch(homeworldUrl);
          if (!response.ok) throw new Error('Network response was not ok');
          const data = await response.json();
          setHomeworld(data.name);
        } catch (error) {
          setError(true);
        }
      };

    fetchCharacter();
  }, [id]);

  if (error) {
    return <ErrorMessage />;
  }

  return (
    character && (
      <div>
        <h1>{character.name}</h1>
        <p>Height: {character.height}</p>
        <p>Mass: {character.mass}</p>
        <p>Hair Color: {character.hair_color}</p>
        <p>Skin Color: {character.skin_color}</p>
        <p>
          Homeworld: <a href={character.homeworld}>{homeworld}</a>
        </p>
      </div>
    )
  );
};

export default Character;
