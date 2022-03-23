import { checkJsonError } from './client';

export async function fetchMovies(year) {
  const params = new URLSearchParams();
  year !== 'All' ? params.set('year', `eq.${year}`) : params.set('select', '*');
  const resp = await fetch(
    `${process.env.REACT_APP_SUPABASE_URL}/rest/v1/movies?${params.toString()}`,
    {
      headers: {
        apikey: process.env.REACT_APP_SUPABASE_KEY,
        Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
      },
    }
  );
  const data = await resp.json();
  return checkJsonError(data);
}
