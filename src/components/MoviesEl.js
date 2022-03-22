import React from 'react';
import styled from 'styled-components';

function MoviesEl({ movies }) {
  return (
    <Grid>
      {movies.map((movie) => (
        <Card key={movie.id}>
          <p>{movie.title}</p>
        </Card>
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(29rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  font-family: 'Bilbo', cursive;
  margin-top: 10px;
  border: 2px black solid;
  padding: 10px;
  h4 {
    font-size: 3rem;
  }
  p {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 0.09rem;
  }
`;

export default MoviesEl;
