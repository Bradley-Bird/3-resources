import { useEffect, useState } from 'react';
import { fetchMovies } from '../services/movies';

function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchMovies();
      setMovies(resp);
    };
    fetchData();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </div>
  );
}

export default Movies;
