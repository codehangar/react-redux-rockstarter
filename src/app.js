import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import { footer } from './styles/footer.scss';
import './styles/main.scss';


const App = ({ children }) =>
    <div>
        <h1>CH Test Project</h1>
        { children }
        <footer className={footer}>
          <IndexLink to="/" activeStyle={{ color: 'red' }}>Filterable Table</IndexLink>
          <Link to="/about" activeStyle={{ color: 'red' }}>About</Link>
          <Link to="/about/lower" activeStyle={{ color: 'red' }}>About</Link>
          <Link to="/people" activeStyle={{ color: 'red' }}>People</Link>
        </footer>
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
