import React from 'react';
import gql from 'graphql-tag';
import Query from '../../components/Query';

const GET_ALL_FILMS = gql`
  query {
    allFilms(orderBy: releaseDate_ASC) {
      title
      id
      releaseDate
    }
  }
`;

function Movies() {
  return (
    <div>
      <Query
        query={GET_ALL_FILMS}
        render={data =>
          data.allFilms.map(film => <h1 key={film.title}>{film.title}</h1>)
        }
      />
    </div>
  );
}

export default Movies;
