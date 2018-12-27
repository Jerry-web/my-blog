import React from 'react';
import {  Row,Col } from 'antd';

class BlogHome extends React.Component{
    render(){
        return(
            <Row>
                <Col xs={24} md={{span:15,offset:1}} lg={{span:15,offset:1}} >
                    <div style={{background: '#fff', padding: 24, minHeight: 180,marginBottom:20}}>
                    <h1>首页</h1>
                    </div>
                    <div style={{background: '#fff', padding: 24, minHeight: 240,marginBottom:20}}></div>
                </Col>
                <Col xs={24} md={{span:6,offset:1}} lg={{span:6,offset:1}} style={{ background: '#fff', padding: 24, minHeight: 280,marginBottom:20 }}>title</Col>
            </Row>
        )
    }
}
export default BlogHome;