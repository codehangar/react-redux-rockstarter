import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'material-ui/DatePicker';
import LinearProgress from 'material-ui/LinearProgress';

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
            peopleList = <LinearProgress mode="indeterminate"/>;
        } else {
            peopleList = people.map((person, i) => {
                return (
                    <div key={i}>{person.name}</div>
                );
            });
        }

        return (
            <div>
                <h3>Star Wars People</h3>
                {peopleList}
                <div>
                    <DatePicker hintText="Portrait Dialog"/>
                    <DatePicker hintText="Landscape Dialog" mode="landscape"/>
                </div>
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
