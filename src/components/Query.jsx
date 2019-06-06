import React from 'react';
import { Query as ApolloQuery } from 'react-apollo';

function Query(props) {
  return (
    <ApolloQuery query={props.query}>
      {({ data, loading, error }) => {
        if (loading) return <h1>Loading...</h1>;
        if (error) return <h1>Error!</h1>;
        if (data) {
          return props.render(data);
        }
      }}
    </ApolloQuery>
  );
}

export default Query;
