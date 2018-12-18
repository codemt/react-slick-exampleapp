import React, { Component } from 'react'
import Select from 'react-select';
import '../../../assets/css/reactselect.css'
 class LocationSelect extends Component {


    state = {
        selectedOption: null,
      }

      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      }

  render() {
    const options = [
        { value: 'mumbai', label:'mumbai' },
        { value: 'delhi', label: 'delhi' },
        { value: 'chennai', label: 'chennai' }
      ];
      const selectedOption = this.state.selectedOption;
    return (
        
        <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder="Location"
        classNamePrefix="react-select"
      />
       
    
    )
  }
}
export default LocationSelect