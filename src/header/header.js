import React, { Component }from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import IconPeople from 'material-ui/svg-icons/social/people';
import { IndexLink, Link } from 'react-router';
import { header, active } from './header.scss';

const tableIcon  = <FontIcon className="material-icons">restore</FontIcon>;
const aboutIcon  = <IconLocationOn />;
const peopleIcon = <IconPeople />;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });
    handleClose  = () => this.setState({ open: false });

    render() {
        return (
            <div className={header}>
                <AppBar
                    title="React Redux Rockstarter"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}
                >
                    <IndexLink to="/" activeClassName={active}>
                        <MenuItem onTouchTap={this.handleClose} leftIcon={tableIcon}>
                            Filterable Table
                        </MenuItem>
                    </IndexLink>
                    <Link to="/about/" activeClassName={active}>
                        <MenuItem onTouchTap={this.handleClose} leftIcon={aboutIcon}>About</MenuItem>
                    </Link>
                    <Link to="/about/lower" activeClassName={active}>
                        <MenuItem onTouchTap={this.handleClose} leftIcon={aboutIcon}>About Lower</MenuItem>
                    </Link>
                    <Link to="/people" activeClassName={active}>
                        <MenuItem onTouchTap={this.handleClose} leftIcon={peopleIcon}>People</MenuItem>
                    </Link>
                    <MenuItem onTouchTap={this.handleClose}>Close</MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default Header;
