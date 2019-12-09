import React, { Component } from 'react';

import classes from './Project.module.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import { Typography } from 'antd';

const { Title } = Typography;

class Project extends Component {


    render () {


        return (
            <Auxiliary>
                <div className={classes.Project}>
                 <Title style={{color: "palevioletred"}}>PROJECT</Title>                
                </div>                            
            </Auxiliary>
        );
    }
}

export default Project;