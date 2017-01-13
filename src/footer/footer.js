import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import IconPeople from 'material-ui/svg-icons/social/people';
import { footer } from './footer.scss';

const tableIcon  = <FontIcon className="material-icons">restore</FontIcon>;
const aboutIcon  = <IconLocationOn />;
const peopleIcon = <IconPeople />;

class Footer extends Component {
    render() {
        const { route, to } = this.props;

        const routeMap = {
            '/': 0,
            '/about/': 1,
            '/about/lower': 2,
            '/people': 3
        };

        return (
            <div className={footer}>
                <Paper zDepth={1}>
                    <BottomNavigation selectedIndex={routeMap[route]}>
                        <BottomNavigationItem
                            label="Filterable Table"
                            icon={tableIcon}
                            onTouchTap={() => to('/')}
                        />
                        <BottomNavigationItem
                            label="About"
                            icon={aboutIcon}
                            onTouchTap={() => to('/about/')}
                        />
                        <BottomNavigationItem
                            label="About Lower"
                            icon={aboutIcon}
                            onTouchTap={() => to('/about/lower')}
                        />
                        <BottomNavigationItem
                            label="People"
                            icon={peopleIcon}
                            onTouchTap={() => to('/people')}
                        />
                    </BottomNavigation>
                </Paper>
            </div>
        );
    }
}

Footer.propTypes = {
    route: PropTypes.string,
    to: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        route: state.routing.locationBeforeTransitions && state.routing.locationBeforeTransitions.pathname,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        to: (path) => {
            console.log('path', path); // eslint-disable-line no-console
            dispatch(push(path));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
