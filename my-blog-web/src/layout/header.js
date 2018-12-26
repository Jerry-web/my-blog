import React from 'react';
import { Menu, Icon,Row,Col,Dropdown,Button } from 'antd';
import '../css/header.css';

class BlogHeader extends React.Component {
  state = {
    current: 'home',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    const menus=(
    <Menu onClick={this.handleClick}>
      <Menu.Item key="home">
        <Icon type="home" />首页
        </Menu.Item>
        <Menu.Item key="archive" >
        <Icon type="form" />归档
        </Menu.Item>
        <Menu.Item key="collect">
        <Icon type="star" theme="filled" />收藏
        </Menu.Item>
        <Menu.Item key="about" >
        <Icon type="team" />关于
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
                    首页<Icon type="caret-down" />
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
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="home">
                <Icon type="home" />首页
                </Menu.Item>
                <Menu.Item key="archive" >
                <Icon type="form" />归档
                </Menu.Item>
                <Menu.Item key="collect">
                <Icon type="star" theme="filled" />收藏
                </Menu.Item>
                <Menu.Item key="about" >
                <Icon type="team" />关于
                </Menu.Item>
            </Menu>
          </Col>
         
        </Row>
    );
  }
}

export default BlogHeader;