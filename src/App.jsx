import React, { Component } from 'react';
import './App.css';
//import SearchBox from './components/job2/searchbox';
import JobSearchOptions from './components/jobs/job-searchoptions';
class App extends Component {
  render() {
    return (
      <div className="App">
     { /*  <Panel2 /> */ }
    { /*  <Mentors /> */ }
      { /*  <Authors /> 
      
             <Job2 />
      <JobsList2 />
             <NavBar />
      
               <Job2 />
                   <NavBar />
                      <JobPage />
                             <CompanyCard />
                              <Panel />
      */ }
       

          <JobSearchOptions />
      </div>
    );
  }
}

export default App;
