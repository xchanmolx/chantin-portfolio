import React from 'react';

import classes from './FooterItems.module.css';
import FooterItem from './FooterItem/FooterItem';

import { Icon } from 'antd';

const footerItems = (props) => {

    return (
    <ul className={classes.FooterItems}>
        <FooterItem><a href="https://github.com/xchanmolx" target="_blank" rel="noopener noreferrer"><Icon type="github" /></a></FooterItem>
        <FooterItem><a href="https://www.facebook.com/cmanigos" target="_blank" rel="noopener noreferrer"><Icon type="facebook" /></a></FooterItem>
        <FooterItem><a href="https://www.youtube.com/user/xchanmolx/" target="_blank" rel="noopener noreferrer"><Icon type="youtube" /></a></FooterItem>
        <FooterItem><a href="https://twitter.com/xchanmolx" target="_blank" rel="noopener noreferrer"><Icon type="twitter" /></a></FooterItem>
        <FooterItem><a href="https://www.linkedin.com/in/chiantine-manigos-47b16aa9/" target="_blank" rel="noopener noreferrer"><Icon type="linkedin" /></a></FooterItem>
    </ul>
    );    
};

export default footerItems;