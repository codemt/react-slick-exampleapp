import React, { Component } from 'react'
import '../../assets/css/navbar/navbar.scss'
 class NavBar extends Component {
  render() {
    return (
        <nav class="ec-nav sticky-top bg-white">
        <div class="container">
          <div class="navbar p-0 navbar-expand-lg">
            
            <span aria-expanded="false" class="navbar-toggler ml-auto collapsed" data-target="#ec-nav__collapsible" data-toggle="collapse">
              <div class="hamburger hamburger--spin js-hamburger">
                <div class="hamburger-box">
                  <div class="hamburger-inner"></div>
                </div>
              </div>
            </span>
            <div class="collapse navbar-collapse when-collapsed" id="ec-nav__collapsible">
              <ul class="nav navbar-nav ec-nav__navbar ml-auto">
             
                  <li class="nav-item nav-item__has-dropdown">
                      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="/">pages</a>
                    <div class="dropdown-menu">
                        <ul class="list-unstyled">
                         <li><a class="nav-link__list" href="page-about.html">About</a></li>
      
                         <li class="nav-item__has-dropdown">
                            <a class="nav-link__list dropdown-toggle" href="/" data-toggle="dropdown"> Events </a>
                            <div class="dropdown-menu">
                              <ul class="list-unstyled">
                                <li><a class="nav-link__list" href="page-events.html"> Events </a></li>
                                <li><a class="nav-link__list" href="page-event-details.html"> Events Details</a></li>
                              </ul>
                            </div>
                          </li>
      
                         <li class="nav-item__has-dropdown">
                            <a class="nav-link__list dropdown-toggle" href="/" data-toggle="dropdown"> Support </a>
                            <div class="dropdown-menu">
                              <ul class="list-unstyled">
                                <li><a class="nav-link__list" href="page-help-&-support.html"> Support </a></li>
                                <li><a class="nav-link__list" href="page-help-&-support-topics.html"> Support Topic</a></li>
                                <li><a class="nav-link__list" href="page-help-&-support-details.html"> Support Details</a></li>
                                <li><a class="nav-link__list" href="page-terms-and-privacy-policy.html"> Privacy Policy </a></li>
                              </ul>
                            </div>
                          </li>
      
                         <li class="nav-item__has-dropdown">
                            <a class="nav-link__list dropdown-toggle" href="/" data-toggle="dropdown"> User </a>
                            <div class="dropdown-menu">
                              <ul class="list-unstyled">
                                <li><a class="nav-link__list" href="page-login.html"> Login </a></li>
                                <li><a class="nav-link__list" href="page-signup.html"> Sign up</a></li>
                                <li><a class="nav-link__list" href="page-recover-password.html"> Reset Password</a></li>
                                <li><a class="nav-link__list" href="page-sp-student-profile.html"> Students Profile</a></li>
                                <li><a class="nav-link__list" href="page-user-profile.html">  Instructors Profile</a></li>
                                <li><a class="nav-link__list" href="page-sp-become-instructor.html">  Become Instructors</a></li>
                                <li><a class="nav-link__list" href="page-sp-order-details.html">  Order Details</a></li>
                              </ul>
                            </div>
                          </li>
      
                         <li class="nav-item__has-dropdown">
                            <a class="nav-link__list dropdown-toggle" href="/" data-toggle="dropdown"> Notice </a>
                            <div class="dropdown-menu">
                              <ul class="list-unstyled">
                                <li><a class="nav-link__list" href="page-notice.html"> Notices </a></li>
                                <li><a class="nav-link__list" href="page-notice-details.html"> Notics Details</a></li>
                              </ul>
                            </div>
                          </li>
      
                         <li class="nav-item__has-dropdown">
                            <a class="nav-link__list dropdown-toggle" href="/" data-toggle="dropdown"> Faculty </a>
                            <div class="dropdown-menu">
                              <ul class="list-unstyled">
                                <li><a class="nav-link__list" href="page-sp-faculty.html"> Faculty </a></li>
                                <li><a class="nav-link__list" href="page-sp-research.html"> Research </a></li>
                                <li><a class="nav-link__list" href="page-sp-research-details.html"> Research Details</a></li>
                                <li><a class="nav-link__list" href="page-sp-scholarship.html"> Scholarship</a></li>
                              </ul>
                            </div>
                          </li>
      
                         <li class="nav-item__has-dropdown">
                            <a class="nav-link__list dropdown-toggle" href="/" data-toggle="dropdown"> Career </a>
                            <div class="dropdown-menu">
                              <ul class="list-unstyled">
                                <li><a class="nav-link__list" href="page-career.html"> Careers </a></li>
                                <li><a class="nav-link__list" href="page-career-details.html"> Career Details </a></li>
                              </ul>
                            </div>
                          </li>
      
                         <li>
                           <a class="nav-link__list" href="page-sp-vc.html">VC</a>
                         </li>
                        <li>
                          <a class="nav-link__list" href="page-faq.html"> FAQs </a>
                        </li>
                         <li>
                           <a class="nav-link__list" href="page-contact.html">Contact</a>
                         </li>
                          <li>
                            <a class="nav-link__list" href="page-404.html"> 404 </a>
                          </li>
                         <li>
                           <a class="nav-link__list" href="page-coming-soon.html">Coming Soon</a>
                         </li>
                        </ul>
                    </div>
                  </li>
              </ul>
            </div>
          
          </div>
        </div> 
        {/* END container */}		
        </nav>  
       
    )
  }
}
export default NavBar;