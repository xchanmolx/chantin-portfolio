import React from 'react';

import classes from './Home.module.css'
import ParticlesContainer from '../../containers/ParticlesContainer/ParticlesContainer';
import { Typography } from 'antd';

const { Title } = Typography;

const home = () => {
    return (        
        <div className={classes.Home}>                 
            <Title style={{color: "palevioletred"}}>Welcome to Chantin's Portfolio Site!</Title>
            <ParticlesContainer />            
        </div> 
    );    
};

export default home;