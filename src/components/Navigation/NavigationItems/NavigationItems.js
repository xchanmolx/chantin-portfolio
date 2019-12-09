import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

import { Icon } from 'antd';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact><Icon type="home" /> Home</NavigationItem>
        <NavigationItem link="/project"><Icon type="project" /> Project</NavigationItem>
        <NavigationItem link="/about"><Icon type="idcard" /> About</NavigationItem>
        <NavigationItem link="/contact"><Icon type="phone" /> Contact</NavigationItem>
        <div className={classes.Resume}>
            <a href="https://drive.google.com/open?id=1uKZS4GFCaWmdOJThSZ28-XOelpji7OkV" target="_blank" rel="noopener noreferrer"><Icon type="file-pdf" /> Resume</a>
        </div>
    </ul>
);

export default navigationItems;