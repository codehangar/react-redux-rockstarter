import React, { PropTypes } from 'react';
import './styles/main.scss';
import { content } from './styles/main.scss';
import Header from './header/header.js';
import Footer from './footer/footer';

const App = ({ children }) =>
    <div>
        <Header/>
        <div className={content}>
            { children }
        </div>
        <Footer/>
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
