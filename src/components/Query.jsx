import React from 'react';
import { Query as ApolloQuery } from 'react-apollo';
import { Alert, Spin, Icon } from 'antd';

function Query(props) {
  return (
    <ApolloQuery query={props.query}>
      {({ data, loading, error }) => {
        if (loading)
          return (
            <div style={{ textAlign: 'center' }}>
              <Spin
                indicator={
                  <Icon type="loading" style={{ fontSize: 48 }} spin />
                }
              />
            </div>
          );
        if (error)
          return (
            <Alert
              type="error"
              showIcon
              message={`There has been an error - ${error}`}
            />
          );
        if (data) {
          return props.render(data);
        }
      }}
    </ApolloQuery>
  );
}

export default Query;
