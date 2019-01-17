import React, { Component } from 'react';
import HeaderComponent from './App/HeaderComponent';
import MainBodyComponent from './App/MainBodyComponent';
import FooterComponent from './App/FooterComponent';
import { Layout, BackTop } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout">

        <Header style={{ textAlign: 'center', position: 'fixed', zIndex: 1, width: '100%' }}>
          <HeaderComponent/>
        </Header>

        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ margin: '16px 0'}}></div>
          <div style={{ background: '#fff', padding: 24, minHeight: 1200 }}>
            <MainBodyComponent />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <FooterComponent />
        </Footer>
        <div>
          <BackTop />
        </div>
      </Layout>
    );
  }
}

export default App;