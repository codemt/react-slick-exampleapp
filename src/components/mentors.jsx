import React, { Component } from 'react'
import '../assets/css/cards.css'
class Mentors extends Component {
   render() {
    return (

        <div style={{backgroundColor:'#f2f4f5'}}>
            <div className="row"  style={{margin:'0px',padding:'20px'}}>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" style={{padding:'0px'}}>
                <div className="__imageboxstyle" style={{backgroundImage: `url(https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2013/02/26/100496736-steve-jobs-march-2011-getty.1910x1000.jpg)`,height:'50vh',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></div>
            </div>
            <div className="w-100 d-sm-block d-md-none d-lg-none d-xl-none"></div>
            <div className="col" style={{padding:'0px'}}>
                <div className="__contentboxstyle">
                    <div className="card-body" style={{height:'50vh'}}>
                        <h4 className="card-title">Tejas Kor</h4>
                        <h6 className="text-muted card-subtitle mb-2">UI/UX Designer</h6>
                        <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                        </div>
                </div>
            </div>
            </div>
        </div>

      
    )
  }
}
export default Mentors;