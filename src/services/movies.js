import { client, checkError } from './client';

export async function fetchMovies() {
  //   const resp = await client.from('movies').select();
  //   return checkError(resp);
  const params = new URLSearchParams();
  params.set('select', '*');
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
  return data;
}
