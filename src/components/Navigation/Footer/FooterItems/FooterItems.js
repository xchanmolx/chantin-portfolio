import React from 'react';

import classes from './FooterItems.module.css';
import FooterItem from './FooterItem/FooterItem';

import { Icon } from 'antd';

const footerItems = (props) => (
    <ul className={classes.FooterItems}>
        <FooterItem><a href="www.github.com"><Icon type="github" /></a></FooterItem>
        <FooterItem><a href="www.facebook.com"><Icon type="facebook" /></a></FooterItem>
        <FooterItem><a href="www.youtube.com"><Icon type="youtube" /></a></FooterItem>
    </ul>    
);

export default footerItems;