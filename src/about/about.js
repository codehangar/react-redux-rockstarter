import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import { container } from '../styles/main.scss';

const About = () =>
    <div className={container}>
        <h3>About... with datepickers?</h3>
        <div>
            <DatePicker hintText="Portrait Dialog"/>
            <DatePicker hintText="Landscape Dialog" mode="landscape"/>
        </div>
    </div>;


export default About;
