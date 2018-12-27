import React from 'react';
import { Menu, Icon,Row,Col,Dropdown,Button } from 'antd';
import {Link} from 'react-router-dom';
import './header.css';

class BlogHeader extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        current: 'home',
        headerTitle:"首页"
      }
  }
  componentDidMount(){
      console.log()
  }
  handleClick = (e) => {
    let htitle="首页";
    switch (e.key){
        case 'home':
        htitle= "首页";
        break;
        case 'archive':
        htitle= "归档";
        break;
        case 'collect':
        htitle= "收藏";
        break;
        case 'about':
        htitle= "关于";
        break;
    }
    this.setState({
      current: e.key,
      headerTitle:htitle
    });
  }
  render() {
    const menus=(
    <Menu defaultSelectedKeys={['home']} selectedKeys={[this.state.current]} onClick={this.handleClick}>
        <Menu.Item key="home">
            <Link to='/'>
                <Icon type="home" />首页
            </Link>
        </Menu.Item>
        <Menu.Item key="archive" >
            <Link to='/archive'>
                <Icon type="form" />归档
            </Link>
        </Menu.Item>
        <Menu.Item key="collect">
            <Link to='/collect'>
                <Icon type="star" theme="filled" />收藏
            </Link>
        </Menu.Item>
        <Menu.Item key="about" >
            <Link to='/about'>
                <Icon type="team" />关于
            </Link>
        </Menu.Item>
    </Menu>
    );
    return (
        <Row>
           <Col
            lg={{span: 0}}
            md={{span: 0}}
            xs={{span: 10}}
            className="drop-down"
          >
             <Dropdown overlay={menus} trigger={['click']}>
                <div>
                  <Button type="primary" ghost style={{border: 'none'}}>
                    {this.state.headerTitle}<Icon type="caret-down" />
                  </Button>
                </div>
             </Dropdown>
          </Col>
          <Col xs={10} md={4} lg={4}>
          <div className="logo" >博客</div>
          </Col>
          <Col xs={0} md={14} lg={14}>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['home']}
              selectedKeys={[this.state.current]}
              onClick={this.handleClick}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="home">
                <Link to='/'>
                    <Icon type="home" />首页
                </Link>  
              </Menu.Item>
              <Menu.Item key="archive" >
                <Link to='/archive'>
                  <Icon type="form" />归档
                </Link>
              </Menu.Item>
              <Menu.Item key="collect">
                <Link to='/collect'>
                  <Icon type="star" theme="filled" />收藏
                </Link>
              </Menu.Item>
              <Menu.Item key="about" >
                <Link to='/about'>
                  <Icon type="user" />关于
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
         
        </Row>
    );
  }
}

export default BlogHeader;