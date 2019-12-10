import React from 'react';

import classes from './Contact.module.css';
import { Random } from 'react-animated-text';
import { Typography, Divider } from 'antd';

const { Title, Text } = Typography;

const TextRandom = () => (
    <Random 
    text="CONTACT"
    effect="stretch" 
    effectDirection="up"
    effectDuration={0.9}
    effectChange={2.2} />
);

const contact = () => (
    <div className={classes.Contact}>
        <Title style={{color: "palevioletred"}}><TextRandom /></Title>
        <Title level={4}>PHONE</Title>
        <Text>+639163609855 / 09163609855</Text>
        <Divider />
        <Title level={4}>E-Mail Address</Title>
        <Text>cmanigos@gmail.com</Text>
    </div>
);

export default contact;