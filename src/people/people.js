import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import { container } from '../styles/main.scss';
import { fetchPeople } from './people.actions';

class People extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.onLoad();
    }

    render() {
        const { loading, people } = this.props;

        let peopleList;
        if (loading) {
            peopleList = (
                <div style={{ textAlign: 'center' }}>
                    <CircularProgress size={80} thickness={5}/>
                </div>
            );
        } else {
            peopleList = people.map((person, i) => {
                return (
                    <ListItem key={i} primaryText={person.name}/>
                );
            });
        }

        return (
            <div className={container}>
                <h3>Star Wars People</h3>
                <Paper zDepth={1}>
                    <List>
                        {peopleList}
                    </List>
                </Paper>
            </div>
        );
    }
}


People.propTypes = {
    params: PropTypes.object,
    onLoad: PropTypes.func,
    loading: PropTypes.bool,
    people: PropTypes.array
};


const mapStateToProps = (state) => {
    return {
        loading: state.people.loading,
        people: state.people.data || []
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => dispatch(fetchPeople())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(People);
