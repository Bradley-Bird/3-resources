import { client, checkError } from './client';

export async function fetchMovies() {
  const resp = await client.from('movies').select();
  return checkError(resp);
}
