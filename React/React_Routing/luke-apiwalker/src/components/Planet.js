import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';

const Planet = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/planets/${id}/`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setPlanet(data);
      } catch (error) {
        setError(true);
      }
    };

    fetchPlanet();
  }, [id]);

  if (error) {
    return <ErrorMessage />;
  }

  return (
    planet && (
      <div>
        <h1>{planet.name}</h1>
        <p>Climate: {planet.climate}</p>
        <p>Terrain: {planet.terrain}</p>
        <p>Population: {planet.population}</p>
        <p>Diameter: {planet.diameter}</p>
      </div>
    )
  );
};

export default Planet;
