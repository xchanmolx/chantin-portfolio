import React from 'react';

import classes from './Home.module.css'

const home = () => {
    return (        
        <div className={classes.Home}>
            <h2>Welcome to Chantin's Portfolio Site!</h2>
            <div className={classes.Paragraph}>
                <p><u>SIMPLE FORMULA FOR LIVING</u></p>
                <p>Live beneath your means.</p>
                <p>Return everything you borrow.</p>
                <p>Stop blaming other people.</p>
                <p>Admit it when you make mistake.</p>
                <p>Give clothes not worn to charity.</p>
                <p>Do something nice and try not to get caught.</p>
                <p>Listen more; talk less.</p>
                <p>Every day take a 30 minutes walk.</p>
                <p>Strive for excellence, not perfection.</p>
                <p>Be on time. Don't make excuses.</p>
                <p>Don't argue. Get organized.</p>
                <p>Be kind to unkind people.</p>
                <p>Let someone cut ahead of you in line.</p>
                <p>Take time to be alone.</p>
                <p>Cultivate good manners.</p>
                <p>Be humble.</p>
                <p>Realize and accept that life isn't fair.</p>
                <p>Know when to keep your mouth shut.</p>
                <p>Go an entire day without criticizing anyone.</p>
                <p>Learn from the past. Plan for the future.</p>
                <p>Live in the present.</p>
                <p>Don't sweat the small stuff. It's all small stuff.</p>
            </div>            
        </div> 
    );    
};

export default home;