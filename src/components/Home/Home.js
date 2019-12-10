import React from 'react';

import classes from './Home.module.css'
import ParticlesContainer from '../../containers/ParticlesContainer/ParticlesContainer';
import { Random } from 'react-animated-text';
import { Typography } from 'antd';

const { Title } = Typography;

const TextRandom = () => (
    <Random 
    text="Welcome to Chantin's Portfolio Site!" 
    effect="stretch" 
    effectDirection="down"
    effectDuration={0.9}
    effectChange={2.2} />
);

const home = () => {
    return (        
        <div className={classes.Home}>                             
            <Title style={{color: "palevioletred"}}><TextRandom /></Title>
            <ParticlesContainer />            
        </div> 
    );    
};

export default home;