import React, { Component } from 'react';

import classes from './Project.module.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import { Random } from 'react-animated-text';
import { Typography } from 'antd';

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
                </div>                            
            </Auxiliary>
        );
    }
}

export default Project;