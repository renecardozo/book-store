import React from 'react';
import DatePicker from 'react-datepicker';
import InputDatepicker from './InputDatepicker';

class DatePickerBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
  }

  render() {
    const {onChangeDate} = this.props
    return (
      <DatePicker
        customInput={<InputDatepicker />}
        selected={this.state.startDate}
        onChange={onChangeDate}
      />
    );
  }
}
export default DatePickerBook;