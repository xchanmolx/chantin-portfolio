import React, { Component } from 'react';

import classes from './Project.module.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import { Random } from 'react-animated-text';
import { Typography, Row, Col } from 'antd';

const { Title } = Typography;

const TextRandom = () => (
    <Random 
    text="PROJECT" 
    effect="stretch" 
    effectDirection="up"
    effectDuration={0.3}
    effectChange={2.2} />
);

const colStyled = {
    display: 'inline-block',
    padding: '10px'
}

class Project extends Component {    

    render () {

        return (
            <Auxiliary>                                    
                <div className={classes.Project}>
                    <Title style={{color: "palevioletred"}}><TextRandom /></Title>                       
                    <Row style={{textAlign: 'center'}}>
                        <Col span={8} style={colStyled}>
                            Test 1
                        </Col>
                        <Col span={8} style={colStyled}>
                            Test 2
                        </Col>
                        <Col span={8} style={colStyled}>
                            Test 3
                        </Col>
                    </Row>
                </div>                
            </Auxiliary>
        );
    }
}

export default Project;