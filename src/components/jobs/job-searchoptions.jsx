import React, { Component } from 'react'
import Select from 'react-select';
 class JobSearchOptions extends Component {


  constructor(props){

      super(props);
      this.state = {

        dateSelected: null,
        experienceSelected : null,
        jobtypeSelected : null,
        locationSelected : null
      }

  }
  

  dateChange = (date) => {
    this.setState({ 
      
        dateSelected : date,
      
    });
    console.log(`Option selected:`, date);
  }


  experienceChange = (experience) => {
    this.setState({


       experienceSelected : experience,
      
      
      });
    console.log(`Option selected:`, experience);
  }

  jobtypeChange = (jobtype) => {
    this.setState({ 

      jobtypeSelected : jobtype,
    
    });
    console.log(`Option selected:`, jobtype);
  
  }

  locationChange = (location) => {
    this.setState({ 

      locationSelected : location,

    });
    console.log(`Option selected:`, location);
   
  }

  onSubmit = (e) => {


      e.preventDefault();
      let location = this.state.locationSelected.value;
      let date = this.state.dateSelected.value;
      let experience = this.state.experienceSelected.value;
      let jobtype = this.state.jobtypeSelected.value;
      //alert(this.state.dateSelected.value);

        console.log(location , date, experience , jobtype );
      // alert(location + date + experience + jobtype );


  }



  render() {


    const dateOptions = [
      { value: 'Today', label:'Today' },
      { value: 'Tomorrow', label: 'Tomorrow'},
      { value: 'Yesterday', label: 'Yesterday' }
    ];
    const experienceOptions = [
      { value: '0', label:'0'},
      { value: '1', label: '1' },
      { value: '2', label: '2'}
    ];
    const jobtypeOptions = [
      { value: 'Full Time', label:'Full Time' },
      { value: 'Part TIme', label: 'Part Time' },
      { value: 'Internship', label: 'Internship' }
    ];

    const locationOptions = [
      { value: 'mumbai', label:'mumbai' },
      { value: 'delhi', label: 'delhi' },
      { value: 'chennai', label: 'chennai' }
    ];

    const date = this.state.dateSelected;
    const experience = this.state.experienceSelected;
    const jobtype = this.state.jobtype;
    const location = this.state.location;
    return (
        
         <div>          
                <Select
                value={date}
                onChange={this.dateChange}
                options={dateOptions}
                placeholder="Date"
                classNamePrefix="react-select"
                />

              <Select
              value={experience}
              onChange={this.experienceChange}
              options={experienceOptions}
              placeholder="Experience"
              classNamePrefix="react-select"
              />

            <Select
            value={jobtype}
            onChange={this.jobtypeChange}
            options={jobtypeOptions}
            placeholder="Job Types"
            classNamePrefix="react-select"
            />

          <Select
          value={location}
          onChange={this.locationChange}
          options={locationOptions}
          placeholder="Location"
          classNamePrefix="react-select"
          />


          <button type="submit" onClick={this.onSubmit}> Submit  </button>

        </div>
    )
  }
}
export default JobSearchOptions