import React from 'react';

import classes from './Logo.module.css';
import chantinLogo from '../../assets/images/cm-logo.png';

const logo = (props) => {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
        <img src={chantinLogo} alt="chantin" />
        </div>
    );    
};

export default logo;