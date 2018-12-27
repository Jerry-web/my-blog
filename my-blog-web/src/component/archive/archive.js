import React from 'react';
import {Row,Col} from 'antd'

class Archive extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
         return(
            <Row>
                <Col xs={24} md={{span:15,offset:1}} lg={{span:15,offset:1}} >
                    <div style={{background: '#fff', padding: 24, minHeight: 450,marginBottom:20}}>
                    <h1>归档页</h1>
                    
                    </div>
                
                </Col>
                <Col xs={24} md={{span:6,offset:1}} lg={{span:6,offset:1}} style={{ background: '#fff', padding: 24, minHeight: 280,marginBottom:20 }}>title</Col>
            </Row>
        )
    }
}
export default Archive;