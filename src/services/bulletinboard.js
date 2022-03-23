import { client, checkError } from './client';

export async function fetchBoard() {
  const resp = await client.from('bulletin-board').select();
  return checkError(resp);
}
