import React from 'react';

import classes from './FooterItem.module.css';

const footerItem = (props) => (
    <li className={classes.FooterItem}>
        <footer
            onClick={props.clicked}            
            activeClassName={classes.active}>{props.children}</footer>
    </li>
);

export default footerItem;