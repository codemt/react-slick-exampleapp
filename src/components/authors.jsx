import React, { Component } from 'react'
import '../assets/css/cards.css'
class Authors extends Component {
   render() {
    return (

        <div>
            <div className="row"  style={{margin:'0px',padding:'20px'}}>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" style={{padding:'0px',marginRight:'50px'}}>
                <div style={{backgroundImage: `url(https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2013/02/26/100496736-steve-jobs-march-2011-getty.1910x1000.jpg)`,height:'50vh',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></div>
            </div>
            <div className="w-100 d-sm-block d-md-none d-lg-none d-xl-none"></div>
            <div className="col" style={{padding:'0px'}}>
                <div className="card">
                    <div className="card-body" style={{height:'50vh'}}>
                        <h4 className="card-title">Steve jobs</h4>
                        <h6 className="text-muted card-subtitle mb-2">CEO,Apple</h6>
                        <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. 
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi 
                        porta gravida at eget metus.
                        </p>
                        </div>
                </div>
            </div>
            </div>
        </div>

      
    )
  }
}
export default Authors;