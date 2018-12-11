import React, { Component } from 'react';
import './App.css';
//import Panel from './components/panel';
//import Panel2 from './components/panel2';
//import Authors from './components/authors';
//import NewAuthors from './components/new_authors';
//import SelectBox from './components/selectbox';
//import ReactSelect from './components/reactselect';
//import JobSearchBar from './components/jobs/job-searchbar';
import Job2 from './components/job2/searchbox';
import JobsList2 from './components/jobslist2';
import NavBar from './components/navbar';



class App extends Component {
  render() {
    return (
      <div className="App">
     { /*  <Panel2 /> */ }
    { /*  <Mentors /> */ }
      { /*  <Authors /> 
      
             <Job2 />
      <JobsList2 />
         
           <DropDown />
      
      */ }
      <NavBar />
       
      </div>
    );
  }
}

export default App;
