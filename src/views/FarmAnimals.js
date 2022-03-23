import { useState, useEffect } from 'react';
import { fetchAnimals } from '../services/farmanimals';
import { useParams } from 'react-router-dom';

function FarmAnimals() {
  const [errorMsg, setErrorMsg] = useState('');
  const params = useParams();
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAnimals();
        setAnimals(data);
      } catch (e) {
        setErrorMsg(e.message);
      }
    };
    fetchData();
  }, [params.name]);

  return (
    <div>
      <p>{errorMsg}</p>
      {animals.map((animal) => (
        <p key={animal.id}>{animal.name}</p>
      ))}
    </div>
  );
}

export default FarmAnimals;
