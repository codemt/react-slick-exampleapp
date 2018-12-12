import React, { Component } from 'react'
import '../../assets/css/navbar/navbar.scss'
 class NavBar extends Component {
  render() {
    return (
      <nav className="ec-nav sticky-top bg-white">
      <div className="container">
        <div className="navbar p-0 navbar-expand-lg">
          <div className="collapse navbar-collapse when-collapsed" id="ec-nav__collapsible">
            <ul className="nav navbar-nav ec-nav__navbar ml-auto">  
              
    
                <li className="nav-item nav-item__has-dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">pages</a>
                  <div className="dropdown-menu">
                      <ul className="list-unstyled">
                       <li><a className="nav-link__list" href="page-about.html">About</a></li>
    
                       <li className="nav-item__has-dropdown">
                          <a className="nav-link__list dropdown-toggle" href="#" data-toggle="dropdown"> Events </a>
                          <div className="dropdown-menu">
                            <ul className="list-unstyled">
                              <li><a className="nav-link__list" href="page-events.html"> Events </a></li>
                              <li><a className="nav-link__list" href="page-event-details.html"> Events Details</a></li>
                            </ul>
                          </div>
                        </li>
    
                       <li className="nav-item__has-dropdown">
                          <a className="nav-link__list dropdown-toggle" href="#" data-toggle="dropdown"> Support </a>
                          <div className="dropdown-menu">
                            <ul className="list-unstyled">
                              <li><a className="nav-link__list" href="page-help-&-support.html"> Support </a></li>
                              <li><a className="nav-link__list" href="page-help-&-support-topics.html"> Support Topic</a></li>
                              <li><a className="nav-link__list" href="page-help-&-support-details.html"> Support Details</a></li>
                              <li><a className="nav-link__list" href="page-terms-and-privacy-policy.html"> Privacy Policy </a></li>
                            </ul>
                          </div>
                        </li>
    
                       <li className="nav-item__has-dropdown">
                          <a className="nav-link__list dropdown-toggle" href="#" data-toggle="dropdown"> User </a>
                          <div className="dropdown-menu">
                            <ul className="list-unstyled">
                              <li><a className="nav-link__list" href="page-login.html"> Login </a></li>
                              <li><a className="nav-link__list" href="page-signup.html"> Sign up</a></li>
                              <li><a className="nav-link__list" href="page-recover-password.html"> Reset Password</a></li>
                              <li><a className="nav-link__list" href="page-sp-student-profile.html"> Students Profile</a></li>
                              <li><a className="nav-link__list" href="page-user-profile.html">  Instructors Profile</a></li>
                              <li><a className="nav-link__list" href="page-sp-become-instructor.html">  Become Instructors</a></li>
                              <li><a className="nav-link__list" href="page-sp-order-details.html">  Order Details</a></li>
                            </ul>
                          </div>
                        </li>
    
                       <li className="nav-item__has-dropdown">
                          <a className="nav-link__list dropdown-toggle" href="#" data-toggle="dropdown"> Notice </a>
                          <div className="dropdown-menu">
                            <ul className="list-unstyled">
                              <li><a className="nav-link__list" href="page-notice.html"> Notices </a></li>
                              <li><a className="nav-link__list" href="page-notice-details.html"> Notics Details</a></li>
                            </ul>
                          </div>
                        </li>
    
                       <li className="nav-item__has-dropdown">
                          <a className="nav-link__list dropdown-toggle" href="#" data-toggle="dropdown"> Faculty </a>
                          <div className="dropdown-menu">
                            <ul className="list-unstyled">
                              <li><a className="nav-link__list" href="page-sp-faculty.html"> Faculty </a></li>
                              <li><a className="nav-link__list" href="page-sp-research.html"> Research </a></li>
                              <li><a className="nav-link__list" href="page-sp-research-details.html"> Research Details</a></li>
                              <li><a className="nav-link__list" href="page-sp-scholarship.html"> Scholarship</a></li>
                            </ul>
                          </div>
                        </li>
    
                       <li className="nav-item__has-dropdown">
                          <a className="nav-link__list dropdown-toggle" href="#" data-toggle="dropdown"> Career </a>
                          <div className="dropdown-menu">
                            <ul className="list-unstyled">
                              <li><a className="nav-link__list" href="page-career.html"> Careers </a></li>
                              <li><a className="nav-link__list" href="page-career-details.html"> Career Details </a></li>
                            </ul>
                          </div>
                        </li>
    
                       <li>
                         <a className="nav-link__list" href="page-sp-vc.html">VC</a>
                       </li>
                      <li>
                        <a className="nav-link__list" href="page-faq.html"> FAQs </a>
                      </li>
                       <li>
                         <a className="nav-link__list" href="page-contact.html">Contact</a>
                       </li>
                        <li>
                          <a className="nav-link__list" href="page-404.html"> 404 </a>
                        </li>
                       <li>
                         <a className="nav-link__list" href="page-coming-soon.html">Coming Soon</a>
                       </li>
                      </ul>
                  </div>
                </li>
            </ul>
          </div>		
        </div>
      </div> {/* ND container */}        {/* END ec-nav */}  
      </nav> 
   
  
    
    )
  }
}
export default NavBar;