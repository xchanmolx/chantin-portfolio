import React, { Component } from 'react';

import classes from './About.module.css';
import ChantinImg from '../../components/ChantinImg/ChantinImg';
import { Random } from 'react-animated-text';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const TextRandom = () => (
    <Random 
    text="ABOUT" 
    effect="stretch" 
    effectDirection="up"
    effectDuration={0.6}
    effectChange={2.2} />
);

class About extends Component {    

    render () {
        return (
                <div className={classes.About}>  
                    <Title style={{color: "palevioletred"}}><TextRandom /></Title>                                    
                    <ChantinImg />       
                    <Paragraph>
                        Hi, I'm Chantin, and I'm from Philippines, a curious react developer enthusiastic in building <strong>enriching user-centric experiences</strong> and is constantly <strong>creating to grow further.</strong>
                    </Paragraph>    
                    <br />
                    <Paragraph>I'm always hungry to learn more about in web development. 
                        I look forward in bringing my focused drive to empower 
                        myself and shape the future for the greater good.
                    </Paragraph>                    
                    <Title level={3}><u>SIMPLE FORMULA FOR LIVING</u></Title>
                    <Paragraph>Live beneath your means.</Paragraph>
                    <Paragraph>Return everything you borrow.</Paragraph>
                    <Paragraph>Stop blaming other people.</Paragraph>
                    <Paragraph>Admit it when you make mistake.</Paragraph>
                    <Paragraph>Give clothes not worn to charity.</Paragraph>
                    <Paragraph>Do something nice and try not to get caught.</Paragraph>
                    <Paragraph>Listen more; talk less.</Paragraph>
                    <Paragraph>Every day take a 30 minutes walk.</Paragraph>
                    <Paragraph>Strive for excellence, not perfection.</Paragraph>
                    <Paragraph>Be on time. Don't make excuses.</Paragraph>
                    <Paragraph>Don't argue. Get organized.</Paragraph>
                    <Paragraph>Be kind to unkind people.</Paragraph>
                    <Paragraph>Let someone cut ahead of you in line.</Paragraph>
                    <Paragraph>Take time to be alone.</Paragraph>
                    <Paragraph>Cultivate good manners.</Paragraph>
                    <Paragraph>Be humble.</Paragraph>
                    <Paragraph>Realize and accept that life isn't fair.</Paragraph>
                    <Paragraph>Know when to keep your mouth shut.</Paragraph>
                    <Paragraph>Go an entire day without criticizing anyone.</Paragraph>
                    <Paragraph>Learn from the past. Plan for the future.</Paragraph>
                    <Paragraph>Live in the present.</Paragraph>
                    <Paragraph>Don't sweat the small stuff. It's all small stuff.</Paragraph>    
                </div>
        );
    }    
}    

export default About;