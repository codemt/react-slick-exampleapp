import React, { Component } from 'react';
import './App.css';
//import Panel from './components/panel';
//import Panel2 from './components/panel2';
//import Authors from './components/authors';
//import NewAuthors from './components/new_authors';
//import SelectBox from './components/selectbox';
//import ReactSelect from './components/reactselect';
import JobSearchBar from './components/jobs/job-searchbar';
//import Mentors from './components/mentors';
// import Panel4 from './components/panel4';
// import Panel3 from './components/panel3';
// import Panel5 from './components/panel5';

class App extends Component {
  render() {
    return (
      <div className="App">
     { /*  <Panel2 /> */ }
    { /*  <Mentors /> */ }
      { /*  <Authors /> */ }
      <JobSearchBar />
      </div>
    );
  }
}

export default App;
