import React, { Component } from 'react';

import classes from './About.module.css';
import ChantinImg from '../../components/ChantinImg/ChantinImg';

class About extends Component {
    state = {
        open: false
    }    

    render () {
        return (
                <div className={classes.About}>                         
                    <h2>ABOUT</h2>                
                    <ChantinImg />        
                    <p>
                        Hi, I'm Chantin, and I'm from Philippines, a curious react developer enthusiastic in building<br />
                        <strong>enriching user-centric experiences</strong> and is constantly <strong>creating to grow further.</strong>
                    </p>
                    <p>I'm always hungry to learn more about in web development. 
                        I look forward in bringing my focused drive to empower 
                        myself and shape the future for the greater good.
                    </p>
                </div>
        );
    }    
}    

export default About;