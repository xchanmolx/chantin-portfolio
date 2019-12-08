import React from 'react';

import classes from './ChantinImg.module.css';
import chantinPic from '../../assets/images/chantin-img.jpg';

const chantinImg = (props) => (
    <div className={classes.ChantinImg} style={{height: props.height}}>
        <img src={chantinPic} alt="chantin" />
    </div>
);

export default chantinImg;