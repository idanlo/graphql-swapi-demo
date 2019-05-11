import React from 'react';
import { Layout as AntLayout, Menu, Icon } from 'antd';
import styles from './Layout.module.css';

const { Content, Footer, Sider } = AntLayout;

function Layout() {
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <AntLayout>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            content
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

export default Layout;
