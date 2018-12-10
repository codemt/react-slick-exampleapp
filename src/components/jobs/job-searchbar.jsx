import React, { Component } from 'react'
import '../../assets/css/jobs/searchbox.css'
 class JobSearchBar extends Component {
  render() {
    return (
        <section class="paddingTop-60 paddingBottom-100">
                <div class="container">
                { /* ROW -1 
                        <div class="row">
                        <div class="col-12 z-index-10" data-offset-top-md="-120">
                        <div class="input-group bg-white rounded p-5 padding-y-md-50 shadow-v2" style={{marginBottom:'-40px'}}>
                        <div class=" col-2 input-group prepend">
                           
                            
                            <i class="fas fa-align-justify" style={{marginTop:'10px'}}></i>
                            
                           
                            
                        </div>
                        <div class="col-10 input-group prepend">

                                <select class="form-control rounded-left-0 rounded-right-0">
                                <option selected disabled default> Search Job </option>
                                <option value="1">Best Selling</option>
                                <option value="2">Top rated</option>
                                <option value="3">Newest</option>
                                <option value="4">Top authors</option>
                            </select>
                             <input type="text" class="form-control" placeholder="By keywords,designation,skills .." />
                            <div class="input-group-append">
                                <button class="btn btn-primary">Search</button>
                            </div>
                                
                    
                        </div>
                        
                        </div>
                        </div>
                        <hr />
                    </div> 

                    */}
                  
            { /* Row 2 */ }
                    <div class="row">
                    <div class="col-12 z-index-10" data-offset-top-md="-120">
                    <div class="input-group bg-white rounded p-5 padding-y-md-50 shadow-v2">
                    <div class=" col-6 input-group prepend">
                       
                    <i class="fas fa-align-justify" style={{marginTop:'10px',marginRight:'10px'}}></i>
                    <input type="text" class="form-control" placeholder="By keywords,designation,skills .." />
                       
                        
                    </div>
                    <div class="col-6 input-group prepend">

                        <select class="form-control rounded-left-0 rounded-right-0" style={{marginRight:'10px'}}>
                            <option selected disabled default> Any Experience </option>
                            <option value="1">0</option>
                            <option value="2">1</option>
                            <option value="3">2</option>
                            <option value="4">3</option>
                        </select>
                        <select class="form-control rounded-left-0 rounded-right-0" style={{marginRight:'10px'}}>
                            <option selected disabled default> Location </option>
                            <option value="1">Mumbai</option>
                            <option value="2">Chennai</option>
                            <option value="3">Bangalore</option>
                            <option value="4">NCR</option>
                        </select>
                    <select class="form-control rounded-left-0 rounded-right-0" style={{marginRight:'10px'}}>
                        <option selected disabled default> Job Type  </option>
                        <option value="1"></option>
                        <option value="2">Top rated</option>
                        <option value="3">Newest</option>
                        <option value="4">Top authors</option>
                    </select>
                <select class=" form-control rounded-left-0 rounded-right-0" style={{marginRight:'10px'}}>
                    <option class="nav-link dropdown-toggle" selected disabled default> Date </option>
                    <option value="1">Best Selling</option>
                    <option value="2">Top rated</option>
                    <option value="3">Newest</option>
                    <option value="4">Top authors</option>
                </select>
                
                        <div class="input-group-append">
                            <button class="btn btn-primary">Search</button>
                        </div>
                            
                
                    </div>
                    
                    </div>
                    </div>
                    <hr />
                </div> 
                    

                    </div>
      </section>
    )
  }
}
export default JobSearchBar;