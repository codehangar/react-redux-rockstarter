import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { filterTable } from './filterable-table.actions';
import ProductTable from './product-table';
import { filterableTable } from './filterable-table.scss';
import { container } from '../styles/main.scss';
import TextField from 'material-ui/TextField';

const FilterableTable = ({ filter, onFilter }) => {
    const handleInput = (event) => {
        onFilter(event.target.value);
    };

    return (
        <div className={`${container} ${filterableTable}`}>
            <TextField
                value={filter}
                hintText="Enter Text"
                onChange={handleInput}/>
            <ProductTable filter={filter}/>
        </div>
    );
};

FilterableTable.propTypes = {
    filter: PropTypes.string,
    onFilter: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilter: filterText => dispatch(filterTable(filterText))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterableTable);
