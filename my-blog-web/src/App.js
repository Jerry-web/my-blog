import React, { Component } from 'react';
 import BlogHeader from './layout/header';
import { Layout, Menu, Breadcrumb,Icon, Row,Col,Button } from 'antd';
import {connect} from 'react-redux';
import {addNum,removeNum,addNumAsync} from './redux/index.redux'
const { Header, Content, Footer } = Layout;

@connect(
  state=>({num:state}),
  {addNum,removeNum,addNumAsync}
)
class App extends Component {
  render() {
    const num=this.props.num;
    const addNum=this.props.addNum;
    const removeNum=this.props.removeNum;
    const addNumAsync=this.props.addNumAsync;
  
    return (
      <Layout className="layout">
      <Header className="header-container">
        <BlogHeader></BlogHeader>
      </Header>
      <Content style={{padding:24,margin:0}}>
        <Row>
          <Col xs={24} md={{span:15,offset:1}} lg={{span:15,offset:1}} >
              <div style={{background: '#fff', padding: 24, minHeight: 180,marginBottom:20}}>
              <h1>现有数量{num}</h1>
              <Button type="primary" onClick={addNum}>新增数量</Button>
              <Button type="primary" style={{marginLeft:10}} onClick={removeNum}>减少数量</Button>
              <Button type="primary" style={{marginLeft:10}} onClick={addNumAsync}>延迟两秒添加</Button>
              </div>
              <div style={{background: '#fff', padding: 24, minHeight: 240,marginBottom:20}}></div>
          </Col>
          <Col xs={24} md={{span:6,offset:1}} lg={{span:6,offset:1}} style={{ background: '#fff', padding: 24, minHeight: 280,marginBottom:20 }}>title</Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
       Copyright ©2019 Create by lijie 
      </Footer>
    </Layout>
    );
  }
}

export default App;
