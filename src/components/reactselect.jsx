import React, { Component } from 'react'
import Select from 'react-select';
import '../assets/css/reactselect.css'
 class ReactSelect extends Component {


    state = {
        selectedOption: null,
      }

      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      }

  render() {
    const options = [
        { value: 'chocolate', label:'Chocolate' ,className:'optionStyles'},
        { value: 'strawberry', label: 'Strawberry',className : 'optionStyles' },
        { value: 'vanilla', label: 'Vanilla','className':'optionStyles' }
      ];
      const selectedOption = this.state.selectedOption;
    return (
        
        <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        classNamePrefix="react-select"
      />
       
    
    )
  }
}
export default ReactSelect