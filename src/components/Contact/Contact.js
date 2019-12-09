import React from 'react';

import classes from './Contact.module.css';
import { Typography, Divider } from 'antd';

const { Title, Text } = Typography;

const contact = () => (
    <div className={classes.Contact}>
        <Title style={{color: "palevioletred"}}>CONTACT</Title>
        <Title level={4}>PHONE</Title>
        <Text>+639163609855 / 09163609855</Text>
        <Divider />
        <Title level={4}>E-Mail Address</Title>
        <Text>cmanigos@gmail.com</Text>
    </div>
);

export default contact;