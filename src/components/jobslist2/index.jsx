import React, { Component } from 'react'
import '../../assets/css/jobslist/index.css'
import '../../assets/css/aside/aside.css';
 class JobsList2 extends Component {
  render() {
    return (
      <section class="paddingTop-50 paddingBottom-100 bg-light-v2">
      <div class="container">
       <div class="row align-items-start">
      <div class="col-lg-9 order-1 order-lg-2">
        <div className="list-card align-items-center shadow-v1 marginTop-30">

        <div className="col-lg-9 paddingRight-30 my-4">
         <div className="media justify-content-between">
           <div className="group">
            <a href="/" className="h4">
            Android Development payments bank limited(IPPB)
            </a>
            {/* UL Group 1 */}
            <ul className="list-inline mt-3" style={{display:'flex',flexDirection:'row',flexGrow:'initial'}}>
              <li className="list-inline-item mr-2" style={{flex:1}}>
              <i className="far fa-building"></i>
                Associated Cements Corporation Limited
              </li>
              <li className="list-inline-item mr-2">
              <i className="fab fa-accusoft"></i>
              Accounts Officer
            </li>
            </ul>
            {/* UL Group 2  
            <ul className="list-inline mt-3" style={{display:'flex',flexDirection:'row'}}>
            <li className="list-inline-item mr-2" style={{flex:1}}>
            <i className="far fa-building"></i>
              Experience - 3 Years - Full Time
            </li>
            <li className="list-inline-item mr-2">
            <i className="fab fa-accusoft"></i>
                    2.75-6.75 LPA
          </li>
          <li className="list-inline-item mr-2">
            <i className="fab fa-accusoft"></i>
                   Mumbai-Chembur
          </li>
          <li className="list-inline-item mr-2">
            <i className="fab fa-accusoft"></i>
                    Posted Date: 28 Oct 2018
          </li>
          </ul> */}
           </div>
           <a href="/" className="btn btn-opacity-primary iconbox iconbox-sm" data-container="body" data-toggle="tooltip" data-placement="top" data-skin="light" title="" data-original-title="Add to wishlist">
              { /* <i className="ti-heart"></i> */ }
              <i className="far fa-star"></i>
             
            </a>
           
           
         </div>
         {/*
         <p>
           Investig ationes demons travge vunt lectores legee lrus quodk legunt saepius claritas est conctetur adipi sicing elit, sed do eiusmod tempor incididunt labore edolore.
         </p> */}
         <div className="d-md-flex justify-content-between align-items-center">
           <ul className="list-inline mb-md-0">
             <li className="list-inline-item mr-3">
                <i className="far fa-clock" style={{marginRight:'10px'}}></i>
               <span className="h4 d-inline small text-primary">Experienced - 3 Years - Full Time </span>
               {/*<span className="h6 d-inline small text-gray"><s>$249</s></span>*/}
             </li>
             <li className="list-inline-item mr-3">
                <i className="fas fa-rupee-sign" style={{marginRight:'10px'}}></i>
               2.75-6.5 LPA
             </li>
             <li className="list-inline-item mr-3">
             <i className="fas fa-map-marker-alt" style={{marginRight:'10px'}}></i>
               Mumbai-Chembur , Real Gold+93
             </li>
           </ul>
           <p> Posted Date : 29 oct 2019 </p>
           <span className="badge badge-success">Apply Now</span>
         </div>
        </div>
        
      </div>
        
        
    
        
     
        
       

     </div> {/* END col-lg-9 */ }
     <aside class="col-lg-3 order-2 order-lg-1">
     <div class="card marginTop-30 shadow-v1">
       <h4 class="card-header border-bottom mb-0 h6">Choose Category</h4>
       <ul class="card-body list-unstyled mb-0">
        <li class="mb-2"><a href="/">All Courses</a></li>
        <li class="mb-2"><a href="/">Web Development</a></li>
        <li class="mb-2"><a href="/">Mobile Apps</a></li>
        <li class="mb-2"><a href="/">Business</a></li>
        <li class="mb-2"><a href="/">IT & Software</a></li>
        <li class="mb-2"><a href="/">Data Science</a></li>
        <li class="mb-2"><a href="/">Design</a></li>
        <li class="mb-2"><a href="/">Marketing</a></li>
       </ul>
     </div>
     <div class="card marginTop-30 shadow-v1">
       <h4 class="card-header border-bottom mb-0 h6">Filter By</h4>
       <ul class="card-body list-unstyled mb-0">
        <li class="mb-2"><a href="/">All Courses</a></li>
        <li class="mb-2"><a href="/">Featured Courses</a></li>
        <li class="mb-2"><a href="/">Popular Courses</a></li>
        <li class="mb-2"><a href="/">Starting Soon</a></li>
        <li class="mb-2"><a href="/">Intermediate</a></li>
        <li class="mb-2"><a href="/">Advanced</a></li>
       </ul>
     </div>
     <div class="card marginTop-30 shadow-v1">
       <h4 class="card-header border-bottom mb-0 h6">By Cost</h4>
       <ul class="card-body list-unstyled mb-0">
        <li class="mb-2"><a href="/">All Courses</a></li>
        <li class="mb-2"><a href="/">Paid Courses</a></li>
        <li class="mb-2"><a href="/">Free Courses</a></li>
       </ul>
     </div>
     <div class="card marginTop-30 shadow-v1 hover:parent">
      <img class="hover:zoomin" src="assets/img/262x230/9.jpg" alt="" />
      <div class="card-img-overlay text-white bg-black-0_6">
        <h4 class="card-title">
          Enriched Learning Experiences
        </h4>
        <p class="my-3">
          Get unlimited access to 2,000 of Educati’s top courses for your team.
        </p>
        <a href="/" class="btn btn-white">Join Now</a>
      </div>
     </div>
   </aside> {/* END col-lg-3  */}
      
       </div> {/*END row- */}
        
      </div> {/* END container */}
    </section>
       
         
         
    )
  }
}
export default JobsList2