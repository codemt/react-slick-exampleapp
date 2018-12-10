import React, { Component } from 'react'
import Select from 'react-select';
import '../../../assets/css/reactselect.css'
 class DateSelect extends Component {


    state = {
        selectedOption: null,
      }

      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      }

  render() {
    const options = [
        { value: 'Today', label:'Today' ,className:'optionStyles'},
        { value: 'Tomorrow', label: 'Tomorrow',className : 'optionStyles' },
        { value: 'Yesterday', label: 'Yesterday','className':'optionStyles' }
      ];
      const selectedOption = this.state.selectedOption;
    return (
        
        <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder="Date"
        classNamePrefix="react-select"
      />
       
    
    )
  }
}
export default DateSelect