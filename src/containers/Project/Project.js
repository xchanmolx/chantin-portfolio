import React, { Component } from 'react';

import classes from './Project.module.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import AbtikImg from '../../assets/images/abtik-coming-soon.png';
import AloguinsanImg from '../../assets/images/aloguinsan-coming-soon.png';
import BogoChapelImg from '../../assets/images/bogo-chapel-coming-soon.png';
import ReactTooltip from 'react-tooltip';
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

class Project extends Component {   

    render () {

        return (
            <Auxiliary>                                    
                <div className={classes.Project}>
                    <Title style={{color: "palevioletred"}}><TextRandom /></Title>                       
                    <Row style={{textAlign: 'center'}}>                        
                        <Col span={8} className={classes.ImgSection}>
                            <a href="/"><img src={AbtikImg} alt="coming soon" data-tip="ABTIK Rescue Website | Under Construction!" /></a>                            
                        </Col>
                        <Col span={8} className={classes.ImgSection}>
                            <a href="/"><img src={AloguinsanImg} alt="coming soon" data-tip="LGU Aloguinsan Website | Under Construction!" /></a>                          
                        </Col>
                        <Col span={8} className={classes.ImgSection}>
                            <a href="/"><img src={BogoChapelImg} alt="coming soon" data-tip="Bogo, Aloguinsan Chapel Website | Under Construction!" /></a>                          
                        </Col>
                        <ReactTooltip />
                    </Row>
                </div>
            </Auxiliary>
        );
    }
}

export default Project;