import React from 'react';
import gql from 'graphql-tag';
import Query from '../../components/Query';
import { Card, Col, Pagination } from 'antd';

const GET_ALL_FILMS = gql`
  query {
    allFilms {
      pageInfo {
        endCursor
        hasNextPage
      }
      totalCount
      edges {
        node {
          title
          id
          releaseDate
        }
      }
    }
  }
`;

function Movies() {
  return (
    <div>
      <Query
        query={GET_ALL_FILMS}
        render={data => (
          <>
            {data.allFilms.edges.map(film => (
              <Col key={film.node.id} xs={24} md={12} lg={8} xl={4}>
                <Card
                  title={film.node.title}
                  style={{ minHeight: 250, margin: '5px 0' }}
                />
              </Col>
            ))}
            <Pagination defaultCurrent={1} total={data.allFilms.totalCount} />
          </>
        )}
      />
    </div>
  );
}

export default Movies;
