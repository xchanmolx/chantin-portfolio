import React from 'react';

import classes from './ChantinImg.module.css';
import chantinPic from '../../assets/images/chantin-img.jpg';
import ReactTooltip from 'react-tooltip';

const chantinImg = (props) => (
    <div className={classes.ChantinImg} style={{height: props.height}}>
        <img src={chantinPic} alt="chantin" data-tip="Chiantine Manigos" />
        <ReactTooltip />
    </div>
);

export default chantinImg;