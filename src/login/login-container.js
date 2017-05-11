import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';
import Login from './login';

class LoginContainer extends Component {

    render() {
        let content;
        if (this.props.loggingIn) {
            content = <CircularProgress/>;
        } else {
            content = <Login/>;
        }

        const containerStyle = {
            margin: 100,
            padding: 40,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        };

        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Paper zDepth={4} style={containerStyle}>
                    <div>
                        <h3>Login</h3>
                    </div>
                    {content}
                </Paper>
            </div>
        );
    }
}

LoginContainer.propTypes = {
    loggingIn: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        loggingIn: state.auth.loggingIn
    };
};


export default connect(mapStateToProps)(LoginContainer);

