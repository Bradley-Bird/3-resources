import { useEffect, useState } from 'react';
import Dropdown from '../components/Dropdown';
import MoviesEl from '../components/MoviesEl';
import { fetchMovies } from '../services/movies';

function Movies() {
  const [errorMsg, setErrorMsg] = useState('');
  const [movies, setMovies] = useState([]);
  const [years, setYears] = useState([]);
  const [selectYear, setSelectYear] = useState('All');
  useEffect(() => {
    async function fetchDropdown() {
      const data = await fetchMovies('All');
      const yearArr = [...new Set(data.map((year) => year.year))];
      yearArr.unshift('All');
      setYears(yearArr);
    }
    const fetchData = async () => {
      try {
        const resp = await fetchMovies(selectYear);
        setMovies(resp);
      } catch (e) {
        setErrorMsg(e.message);
      }
    };
    fetchDropdown();
    fetchData();
  }, [selectYear]);

  return (
    <div>
      <p>{errorMsg}</p>
      <Dropdown obj={years} callBack={setSelectYear} />
      <MoviesEl {...{ movies }} />
    </div>
  );
}

export default Movies;
