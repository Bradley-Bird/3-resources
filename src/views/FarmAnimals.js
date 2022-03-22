import { useState, useEffect } from 'react';
import { fetchAnimals } from '../services/farmanimals';
import { useParams } from 'react-router-dom';

function FarmAnimals() {
  const params = useParams();
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAnimals();
      setAnimals(data);
    };
    fetchData();
  }, [params.name]);

  return (
    <div>
      {animals.map((animal) => (
        <p key={animal.id}>{animal.name}</p>
      ))}
    </div>
  );
}

export default FarmAnimals;
