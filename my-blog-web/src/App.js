import React, { Component } from 'react';
 import BlogHeader from './component/header/header';
import { Layout } from 'antd';
import {connect} from 'react-redux';
import {Route,Switch} from 'react-router-dom';
import {addNum,removeNum,addNumAsync} from './redux/index.redux';
import BlogHome from './component/home/home';
import Archive from './component/archive/archive';
import Collect from './component/collect/collect';
import About from './component/about/about';
const { Header, Content, Footer } = Layout;

@connect(
  state=>({num:state}),
  {addNum,removeNum,addNumAsync}
)
class App extends Component {

  render() {
    return (
      <Layout className="layout">
      <Header className="header-container">
        <BlogHeader></BlogHeader>
      </Header>
      <Content style={{padding:24,margin:0}}>
      <Switch>
        <Route path='/' exact component={BlogHome}></Route>
        <Route path='/archive' component={Archive}></Route>
        <Route path='/collect' component={Collect}></Route>
        <Route path='/about' component={About}></Route>
        <Route component={BlogHome}></Route>
      </Switch>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
       Copyright ©2019 Create by lijie 
      </Footer>
    </Layout>
    );
  }
}

export default App;
