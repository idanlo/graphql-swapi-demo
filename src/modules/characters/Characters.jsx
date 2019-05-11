import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Row, Col, Card, Divider } from 'antd';

const GET_ALL_CHARACTERS = gql`
  query {
    allPersons {
      name
      id
      films {
        title
      }
    }
  }
`;

function Characters() {
  return (
    <Row gutter={16}>
      <Query query={GET_ALL_CHARACTERS}>
        {({ data, loading, error }) => {
          if (loading) return <h1>Loading...</h1>;
          if (error) return <h1>Error!</h1>;
          if (data) {
            console.log(data);
            return data.allPersons.map(char => (
              <Col key={char.id} xs={24} md={12} lg={8} xl={4}>
                <Card
                  title={char.name}
                  style={{ height: 225, margin: '5px 0' }}
                >
                  <span>
                    <Divider style={{ margin: '2px 0' }}>
                      <b>Movies</b>
                    </Divider>
                    {char.films.map(film => film.title).join(', ')}
                  </span>
                </Card>
              </Col>
            ));
          }
        }}
      </Query>
    </Row>
  );
}

export default Characters;
