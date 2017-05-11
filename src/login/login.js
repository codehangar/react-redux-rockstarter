import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { login } from './login.actions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    componentDidMount() {
    }

    handleChange = (fieldName) => {
        return (event, value) => {
            console.log('fieldName', fieldName); // eslint-disable-line no-console
            console.log('event', event); // eslint-disable-line no-console
            console.log('value', value); // eslint-disable-line no-console
            this.setState({ [fieldName]: value });
        };
    };

    handleSubmit = (event, values) => {
        event.preventDefault();
        console.log('SUBMIT values', values); // eslint-disable-line no-console
        this.props.submitLogin(this.state);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                    <TextField
                        id="email"
                        hintText="Email"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        disabled={this.props.loggingIn}
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <TextField
                        id="password"
                        hintText="Password"
                        value={this.state.password}
                        type="password"
                        onChange={this.handleChange('password')}
                        disabled={this.props.loggingIn}
                    />
                </div>
                <RaisedButton
                    type="submit"
                    label="LOGIN"
                    labelPosition="before"
                    primary
                    disabled={this.props.loggingIn}
                />
            </form>
        );
    }
}

Login.propTypes = {
    params: PropTypes.object,
    submitLogin: PropTypes.func,
    loggingIn: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        loggingIn: state.auth.loggingIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitLogin: (credentials) => {
            dispatch(login(credentials));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

