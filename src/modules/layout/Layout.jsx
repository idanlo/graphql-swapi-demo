import React from 'react';
import { Layout as AntLayout, Menu, Icon } from 'antd';
import { withRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import styles from './Layout.module.css';
import Movies from '../movies/Movies';
import Characters from '../characters/Characters';

const { Content, Footer, Sider } = AntLayout;

const mapPathnameToKey = {
  '/movies': '1',
  '/characters': '2'
};

function Layout(props) {
  useTitle(props.location.pathname);

  const { location } = props;
  return (
    <AntLayout className={styles.Layout}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[mapPathnameToKey[location.pathname]]}
        >
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">Movies</span>
            <Link to="/movies" />
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">Characters</span>
            <Link to="/characters" />
          </Menu.Item>
        </Menu>
      </Sider>
      <AntLayout>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <Switch>
              <Route path="/movies" exact component={Movies} />
              <Route path="/characters" exact component={Characters} />
              <Redirect from="/" to="/movies" />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Idan Lottan ©2019{' '}
          <a
            href="https://github.com/idanlo"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </Footer>
      </AntLayout>
    </AntLayout>
  );
}

export default withRouter(Layout);
