import React, { Component } from 'react'
import '../../assets/css/jobslist/index.css'
 class JobsList extends Component {
  render() {
    return (
        <section class="paddingTop-50 paddingBottom-100 bg-light-v2">
        <div class="container">
            {/* Card Start */}
          <div class="list-card align-items-center shadow-v1 marginTop-30">
            <div class="col-lg-12 paddingRight-30 my-4">
             <div class="media justify-content-between">
               <div class="group">
                <a href="/" class="h4">
                Android Development payments bank limited(IPPB)
                </a>
                {/* UL Group 1 */}
                <ul class="list-inline mt-3" style={{display:'flex',flexDirection:'row',flexGrow:'initial'}}>
                  <li class="list-inline-item mr-2" style={{flex:1}}>
                  <i class="far fa-building"></i>
                    Associated Cements Corporation Limited
                  </li>
                  <li class="list-inline-item mr-2">
                  <i class="fab fa-accusoft"></i>
                  Accounts Officer
                </li>
                </ul>
                {/* UL Group 2  
                <ul class="list-inline mt-3" style={{display:'flex',flexDirection:'row'}}>
                <li class="list-inline-item mr-2" style={{flex:1}}>
                <i class="far fa-building"></i>
                  Experience - 3 Years - Full Time
                </li>
                <li class="list-inline-item mr-2">
                <i class="fab fa-accusoft"></i>
                        2.75-6.75 LPA
              </li>
              <li class="list-inline-item mr-2">
                <i class="fab fa-accusoft"></i>
                       Mumbai-Chembur
              </li>
              <li class="list-inline-item mr-2">
                <i class="fab fa-accusoft"></i>
                        Posted Date: 28 Oct 2018
              </li>
              </ul> */}
               </div>
               <a href="/" class="btn btn-opacity-primary iconbox iconbox-sm" data-container="body" data-toggle="tooltip" data-placement="top" data-skin="light" title="" data-original-title="Add to wishlist">
                  { /* <i class="ti-heart"></i> */ }
                  <i class="far fa-star"></i>
                </a>
            
               
             </div>
             {/*
             <p>
               Investig ationes demons travge vunt lectores legee lrus quodk legunt saepius claritas est conctetur adipi sicing elit, sed do eiusmod tempor incididunt labore edolore.
             </p> */}
             <div class="d-md-flex justify-content-between align-items-center">
               <ul class="list-inline mb-md-0">
                 <li class="list-inline-item mr-3">
                   <span class="h4 d-inline small text-primary">Experienced - 3 Years - Full Time </span>
                   {/*<span class="h6 d-inline small text-gray"><s>$249</s></span>*/}
                 </li>
                 <li class="list-inline-item mr-3">
                   <i class="ti-headphone small mr-2"></i>
                   2.75-6.5 LPA
                 </li>
                 <li class="list-inline-item mr-3">
                   <i class="ti-time small mr-2"></i>
                   Mumbai-Chembur , Real Gold+93
                 </li>
               </ul>
               <span class="badge badge-success">Apply Now</span>
             </div>
            </div>
          </div>
            {/* Card End */}
        
      
        </div> {/*  END container */}
      </section>
         
         
    )
  }
}
export default JobsList