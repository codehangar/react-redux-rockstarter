import React from 'react';
import PropTypes from 'prop-types';
import '../styles/main.scss';
import { app, content } from '../styles/main.scss';
// import Header from '../header/header.js';
import Footer from '../footer/footer';

const App = ({ children }) =>
    <div className={app}>
        {/* <Header/> */}
        <div className={content}>
            { children }
        </div>
        <Footer/>
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
