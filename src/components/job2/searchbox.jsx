import React, { Component } from 'react'
import '../../assets/css/jobs/searchbox.css'
//import SelectBox from '../reactselect';
import SelectExperience from '../jobs/selectboxs/experience'
import LocationSelect from '../jobs/selectboxs/location';
import JobTypeSelect from '../jobs/selectboxs/jobtype';
import DateSelect from '../jobs/selectboxs/date';
 class Job2 extends Component {
  render() {
    return (
        <section class="paddingTop-60 paddingBottom-100">
                <div class="">
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
                    <div class=" col-4 input-group prepend">
                       
                    <i class="fas fa-align-justify" style={{marginTop:'10px',marginRight:'10px'}}></i>
                    <input type="text" class="form-control" placeholder="By keywords,designation,skills .." />
                       
                        
                    </div>
                    <div class="col-8 input-group prepend">

                       {/* <SelectBox /> */ }
                         <SelectExperience /> 
                         <LocationSelect />
                         <JobTypeSelect />
                         <DateSelect />
              
                
                        <div class="input-group-append" style={{marginLeft:'10px'}}>
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
export default Job2;