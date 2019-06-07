import React from 'react';
import gql from 'graphql-tag';
import { Row, Col, Card, Divider, Pagination } from 'antd';
import Query from '../../components/Query';

const GET_ALL_CHARACTERS = gql`
  query {
    allPeople {
      pageInfo {
        endCursor
        hasNextPage
      }
      totalCount
      edges {
        node {
          name
          id
          filmConnection {
            edges {
              node {
                title
              }
            }
          }
        }
      }
    }
  }
`;

function Characters() {
  return (
    <Row gutter={16}>
      <Query
        query={GET_ALL_CHARACTERS}
        render={data => (
          <>
            {data.allPeople.edges.map(char => (
              <Col key={char.node.id} xs={24} md={12} lg={8} xl={4}>
                <Card
                  title={char.node.name}
                  style={{ minHeight: 250, margin: '5px 0' }}
                >
                  <span>
                    <Divider style={{ margin: '2px 0' }}>
                      <b>Movies</b>
                    </Divider>
                    {char.node.filmConnection.edges
                      .map(film => film.node.title)
                      .join(', ')}
                  </span>
                </Card>
              </Col>
            ))}
            <Pagination defaultCurrent={1} total={data.allPersons.totalCount} />
          </>
        )}
      />
    </Row>
  );
}

export default Characters;
