import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCalendar } from '@fortawesome/free-solid-svg-icons'
class InputDatepicker extends React.Component {
  static propTypes = {
    onClick: PropTypes.func
  };

  render() {
    return (
      <div className="date-picker-icon"  onClick={this.props.onClick}>
        <FontAwesomeIcon icon={faCalendar} size="2x"/>
      </div>
    );
  }
}

export default InputDatepicker;