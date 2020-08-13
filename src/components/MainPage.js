import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Login from '../components/Login'
// import './index.css';
import InputBox from './InputBox'
import Axios from 'axios';
import CardItem from './CardItem'
import { Layout, Menu } from 'antd';
// import {
//   AppstoreOutlined,
//   BarChartOutlined,
//   CloudOutlined,
//   ShopOutlined,
//   TeamOutlined,
//   UserOutlined,
//   UploadOutlined,
//   VideoCameraOutlined,
// } from '@ant-design/icons';

const MainPage = () => {

  const { Header, Content, Footer, Sider } = Layout;

    return(
      <>
  <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} style ={{marginTop:"20%"}}>
        <Menu.Item key="1" >
          nav 1
        </Menu.Item>
        <Menu.Item key="2" >
          nav 2
        </Menu.Item>
        <Menu.Item key="3" >
          nav 3
        </Menu.Item>
  
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
        <Menu.Item key="1" style={{marginLeft: "25%"}}><InputBox/></Menu.Item>
        <Menu.Item key="2" style ={{marginLeft : "35%"}}><a href="/login">로그인</a></Menu.Item>
        {/* <Menu.Item key="3">logout</Menu.Item> */}
      </Menu>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
          <CardItem/>
  
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Ant UED</Footer>
    </Layout>
  </Layout>  


</>
  )
}

export default MainPage

