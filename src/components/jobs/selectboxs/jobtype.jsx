import React, { Component } from 'react'
import Select from 'react-select';
import '../../../assets/css/reactselect.css'
 class JobTypeSelect extends Component {


    state = {
        selectedOption: null,
      }

      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      }

  render() {
    const options = [
        { value: 'Sales', label:'Sales' },
        { value: 'IT', label: 'IT' },
        { value: 'Marketing', label: 'Marketing' }
      ];
      const selectedOption = this.state.selectedOption;
    return (
        
        <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder="Job Type"
        classNamePrefix="react-select"
      />
       
    
    )
  }
}
export default JobTypeSelect