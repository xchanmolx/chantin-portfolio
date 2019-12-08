import React from 'react';

import classes from './Footer.module.css';
import FooterItems from '../Footer/FooterItems/FooterItems'

const footer = () => (
    <div className={classes.Footer}>
        <footer className={classes.DesktopOnly}>
            <FooterItems />
        </footer>
    </div>
);

export default footer;