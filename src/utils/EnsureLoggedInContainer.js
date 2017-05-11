import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { replace } from 'connected-react-router';
import * as types from '../action-types';

class EnsureLoggedInContainer extends Component {
    componentDidMount() {
        this.checkAuth();
    }

    shouldComponentUpdate() {
        return this.checkAuth();
    }

    checkAuth = () => {
        const { isLoggedIn, redirect, currentURL } = this.props;

        if (!isLoggedIn) {
            redirect(currentURL);
            return false;
        }
        return true;
    };

    render() {
        const { isLoggedIn } = this.props;
        if (isLoggedIn) {
            return this.props.children;
        }
        return null;
    }
}

EnsureLoggedInContainer.propTypes = {
    children: PropTypes.object,
    isLoggedIn: PropTypes.bool,
    authToken: PropTypes.string,
    currentURL: PropTypes.string,
    redirect: PropTypes.func,
};

function mapStateToProps(state) {
    return {
        // TODO: remove || true when ready
        isLoggedIn: !!state.auth.user || true,
        currentURL: state.router.location.pathname
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        redirect: (currentURL) => {
            let redirectUrl = currentURL;
            if (currentURL === '/login') {
                redirectUrl = '/';
            }
            dispatch({
                type: types.SET_REDIRECT_URL,
                redirectUrl
            });
            dispatch(replace('/login'));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EnsureLoggedInContainer);
