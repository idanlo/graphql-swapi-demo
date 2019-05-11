import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

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
      <Query query={GET_ALL_FILMS}>
        {({ data, loading, error }) => {
          if (loading) return <h1>Loading...</h1>;
          if (error) return <h1>Error!</h1>;

          if (data) {
            console.log(data);
            return data.allFilms.map(film => (
              <h1 key={film.title}>{film.title}</h1>
            ));
          }
        }}
      </Query>
    </div>
  );
}

export default Movies;
