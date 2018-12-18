import React, { Component } from 'react'
import Select from 'react-select';
import '../../../assets/css/reactselect.css'
 class SelectExperience extends Component {


    state = {
        selectedOption: null,
      }

      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      }

  render() {
    const options = [
        { value: '0', label:'0'},
        { value: '1', label: '1' },
        { value: '2', label: '2'}
      ];
      const selectedOption = this.state.selectedOption;
    return (
        
        <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder="Experience"
        classNamePrefix="react-select"
      />
       
    
    )
  }
}
export default SelectExperience