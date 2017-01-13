import React, { PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const ProductRow = ({ data }) =>
    <TableRow>
        <TableRowColumn>{data.name}</TableRowColumn>
        <TableRowColumn>{data.price}</TableRowColumn>
        <TableRowColumn>{data.category}</TableRowColumn>
        <TableRowColumn>{data.stocked ? 'Yes' : 'No'}</TableRowColumn>
    </TableRow>;

ProductRow.propTypes = {
    data: PropTypes.object
};

export default ProductRow;
