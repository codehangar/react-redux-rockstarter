import React, { PropTypes } from 'react';
import DatePicker from 'material-ui/DatePicker';

const New = ({params}) =>
  <div>
    Welcome the the NEW route!!!
    <p>ID: {params.id ? params.id : 'No ID given'}</p>
    <div>
      <DatePicker hintText="Portrait Dialog" />
      <DatePicker hintText="Landscape Dialog" mode="landscape" />
    </div>
  </div>;

New.propTypes = {
    params: PropTypes.object
};


export default New;
