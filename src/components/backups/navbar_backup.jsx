import React, { Component } from 'react'
import '../../assets/css/navbar/navbar.scss'
 class NavBarBackup extends Component {
  render() {
    return (
      <nav className="ec-nav sticky-top bg-white">
      <div className="container">
        <div className="navbar p-0 navbar-expand-lg">
     
          <div className="navbar-brand">
            <a className="logo-default" href="index.html"><img alt="" src="assets/img/logo-black.png"/></a>
          </div>
          <span aria-expanded="false" className="navbar-toggler ml-auto collapsed" data-target="#ec-nav__collapsible" data-toggle="collapse">
            <div className="hamburger hamburger--spin js-hamburger">
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </span>
          <div className="collapse navbar-collapse when-collapsed" id="ec-nav__collapsible">
            <ul className="nav navbar-nav ec-nav__navbar ml-auto">
    
                <li className="nav-item nav-item__has-megamenu megamenu-col-2">
                  <a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">Home</a>
                  <div className="dropdown-menu left-auto p-2 p-md-4">
                    <div className="row mx-0">
                      <div className="col-lg-6">
                        <ul className="list-unstyled">
                          <li><a className="nav-link__list px-0" href="index-school-default.html">Demo School</a></li>
                          <li><a className="nav-link__list px-0" href="index-school-online.html">Demo Online School</a></li>
                          <li><a className="nav-link__list px-0" href="index-college.html">Demo College</a></li>
                          <li><a className="nav-link__list px-0" href="index-university.html">Demo Harvard University</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul className="list-unstyled">
                          <li><a className="nav-link__list px-0" href="index-online-university.html">Demo Online University</a></li>
                          <li><a className="nav-link__list px-0" href="index-lynda.html">Demo Lynda</a></li>
                          <li><a className="nav-link__list px-0" href="index-udemy.html">Demo Udemy</a></li>
                          <li><a className="nav-link__list px-0" href="index-one-course.html">Demo One Course</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
    
                <li className="nav-item nav-item__has-dropdown">
                    <a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">Courses</a>
                    <ul className="dropdown-menu">
                      <li><a href="page-sp-all-courcess.html" className="nav-link__list">All Courses</a></li>
                      <li><a href="page-sp-all-courcess-list.html" className="nav-link__list">Courses List</a></li>
                      <li><a href="page-sp-all-courcess-with-sidebar.html" className="nav-link__list">Courses Grid</a></li>
                      <li><a href="page-sp-all-courcess-list-with-sidebar.html" className="nav-link__list">Courses List Sidebar</a></li>
                      <li><a href="page-sp-all-courcess-with-sidebar.html" className="nav-link__list">Courses Grid Sidebar</a></li>
                      <li><a href="page-sp-course-details.html" className="nav-link__list">Courses Details</a></li>
                    </ul>
                </li>
    
                <li className="nav-item nav-item__has-dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/">pages</a>
                  <div className="dropdown-menu">
                      <ul className="list-unstyled">
                       <li><a className="nav-link__list" href="page-about.html">About</a></li>
    
                       <li className="nav-item__has-dropdown">
                          <a className="nav-link__list dropdown-toggle" href="/" data-toggle="dropdown"> Events </a>
                          <div className="dropdown-menu">
                            <ul className="list-unstyled">
                              <li><a className="nav-link__list" href="page-events.html"> Events </a></li>
                              <li><a className="nav-link__list" href="page-event-details.html"> Events Details</a></li>
                            </ul>
                          </div>
                        </li>
    
                       <li className="nav-item__has-dropdown">
                          <a className="nav-link__list dropdown-toggle" href="/" data-toggle="dropdown"> Support </a>
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
                          <a className="nav-link__list dropdown-toggle" href="/" data-toggle="dropdown"> User </a>
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
                          <a className="nav-link__list dropdown-toggle" href="/" data-toggle="dropdown"> Notice </a>
                          <div className="dropdown-menu">
                            <ul className="list-unstyled">
                              <li><a className="nav-link__list" href="page-notice.html"> Notices </a></li>
                              <li><a className="nav-link__list" href="page-notice-details.html"> Notics Details</a></li>
                            </ul>
                          </div>
                        </li>
    
                       <li className="nav-item__has-dropdown">
                          <a className="nav-link__list dropdown-toggle" href="/" data-toggle="dropdown"> Faculty </a>
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
                          <a className="nav-link__list dropdown-toggle" href="/" data-toggle="dropdown"> Career </a>
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
    
                 <li className="nav-item nav-item__has-dropdown">
                    <a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown"> Blog </a>
                    <div className="dropdown-menu">
                      <ul className="list-unstyled">
    
                         <li className="nav-item__has-dropdown">
                          <a className="nav-link__list dropdown-toggle" href="/" data-toggle="dropdown"> Layout </a>
                          <div className="dropdown-menu">
                            <ul className="list-unstyled">
                              <li><a className="nav-link__list" href="blog-standard.html"> Standard </a></li>
                              <li><a className="nav-link__list" href="blog-card.html"> Card </a></li>
                              <li><a className="nav-link__list" href="blog-masonry.html"> Mesonry </a></li>
                              <li><a className="nav-link__list" href="blog-list.html"> List </a></li>
                            </ul>
                          </div>
                        </li>
    
                         <li className="nav-item__has-dropdown">
                          <a className="nav-link__list dropdown-toggle" href="/" data-toggle="dropdown"> Single Post</a>
                          <div className="dropdown-menu">
                            <ul className="list-unstyled">
                              <li><a className="nav-link__list" href="blog-single.html"> Image </a></li>
                              <li><a className="nav-link__list" href="blog-single-audio.html"> Audio </a></li>
                              <li><a className="nav-link__list" href="blog-single-soundcloud.html"> Sound Cloud </a></li>
                              <li><a className="nav-link__list" href="blog-single-video-HTML5.html"> HTML5 Video </a></li>
                              <li><a className="nav-link__list" href="blog-single-video-youtube.html"> Youtube Video </a></li>
                              <li><a className="nav-link__list" href="blog-single-video-vimeo.html"> Vimeo Video </a></li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
    
                 <li className="nav-item nav-item__has-dropdown">
                    <a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown"> Shop </a>
                    <div className="dropdown-menu">
                      <ul className="list-unstyled">
                      <li>
                        <a className="nav-link__list" href="shop.html"> Shop </a>
                      </li>
                      <li>
                        <a className="nav-link__list" href="shop-single.html"> Shop Single</a>
                      </li>
                      <li>
                        <a className="nav-link__list" href="shop-cart.html"> Cart</a>
                      </li>
                      <li>
                        <a className="nav-link__list" href="shop-checkout.html"> Checkout</a>
                      </li>
                      <li>
                        <a className="nav-link__list" href="shop-order-success.html">Order Success</a>
                      </li>
    
                      </ul>
                    </div>
                  </li>
    
                <li className="nav-item nav-item__has-megamenu">
                  <a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">Elements</a>
                  <div className="dropdown-menu p-2 p-md-4">
                    <div className="row mx-0">
                      <div className="col-md-3">
                        <ul className="list-unstyled">
                          <li><a className="nav-link__list px-0" href="element-accordion.html">Accordions</a></li>
                          <li><a className="nav-link__list px-0" href="element-alerts.html">Alerts</a></li>
                          <li><a className="nav-link__list px-0" href="element-avatars.html">Avatars</a></li>
                          <li><a className="nav-link__list px-0" href="element-badges.html">Badges</a></li>
                          <li><a className="nav-link__list px-0" href="element-breadcrumbs.html">Breadcrumbs</a></li>
                          <li><a className="nav-link__list px-0" href="element-buttons.html">Buttons</a></li>
                          <li><a className="nav-link__list px-0" href="element-call-to-action.html">Call To Action</a></li>
                          <li><a className="nav-link__list px-0" href="element-carousels.html">Carousels</a></li>
                          <li><a className="nav-link__list px-0" href="element-checkbox.html">Checkbox</a></li>
                          <li><a className="nav-link__list px-0" href="element-counters.html">Counters</a></li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <ul className="list-unstyled">
                          <li><a className="nav-link__list px-0" href="element-card.html">Card</a></li>
                          <li><a className="nav-link__list px-0" href="element-countdown.html">Countdown</a></li>
                          <li><a className="nav-link__list px-0" href="element-dropcaps.html">Dropcaps</a></li>
                          <li><a className="nav-link__list px-0" href="element-dropdown.html">Dropdown</a></li>
                          <li><a className="nav-link__list px-0" href="element-form.html">Form</a></li>
                          <li><a className="nav-link__list px-0" href="element-gallery.html">Gallery</a></li>
                          <li><a className="nav-link__list px-0" href="element-infobox.html">Infobox</a></li>
                          <li><a className="nav-link__list px-0" href="element-infobox-card.html">Infobox Card</a></li>
                          <li><a className="nav-link__list px-0" href="element-lightbox.html">Lightbox</a></li>
                          <li><a className="nav-link__list px-0" href="element-list-group.html">List Group</a></li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <ul className="list-unstyled">
                          <li><a className="nav-link__list px-0" href="element-map.html">Map</a></li>
                          <li><a className="nav-link__list px-0" href="element-modal.html">Modal</a></li>
                          <li><a className="nav-link__list px-0" href="element-pagintion.html">Pagintion</a></li>
                          <li><a className="nav-link__list px-0" href="element-popover.html">Popover</a></li>
                          <li><a className="nav-link__list px-0" href="element-pricing.html">Pricing</a></li>
                          <li><a className="nav-link__list px-0" href="element-progress.html">Progress</a></li>
                          <li><a className="nav-link__list px-0" href="element-radio.html">Radio</a></li>
                          <li><a className="nav-link__list px-0" href="element-range-slider.html">Range Slider</a></li>
                          <li><a className="nav-link__list px-0" href="element-rating.html">Rating</a></li>
                          <li><a className="nav-link__list px-0" href="element-select.html">Select</a></li>                           
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <ul className="list-unstyled">
                          <li><a className="nav-link__list px-0" href="element-tables.html">Tables</a></li>
                          <li><a className="nav-link__list px-0" href="element-tabs.html">Tabs</a></li>
                          <li><a className="nav-link__list px-0" href="element-team.html">Team</a></li>
                          <li><a className="nav-link__list px-0" href="element-testimonials.html">Testimonials</a></li>
                          <li><a className="nav-link__list px-0" href="element-timeline.html">Timeline</a></li>
                          <li><a className="nav-link__list px-0" href="element-tooltip.html">Tooltip</a></li>
                          <li><a className="nav-link__list px-0" href="element-touchspin.html">Touchspin</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
            </ul>
          </div>
          <div className="nav-toolbar">
            <ul className="navbar-nav ec-nav__navbar">
              <li className="nav-item nav-item__has-dropdown">
                <a className="nav-link dropdown-toggle no-caret" href="/" data-toggle="dropdown"><i className="ti-shopping-cart"></i></a>
                <ul className="dropdown-menu dropdown-cart" aria-labelledby="navbarDropdown">
                  <li className="dropdown-cart__item">
                    <div className="media">
                      <img className="dropdown-cart__img" src="assets/img/shop/products/2.jpg" alt="" />
                      <div className="media-body pl-3">
                        <a href="/" className="h6">Quick intro to Python</a>
                        <span className="text-primary">$199.00</span>
                      </div>
                    </div>
                    <a href="/" className="dropdown-cart__item-remove">
                      <i className="ti-close"></i>
                    </a>
                  </li>
                  <li className="dropdown-cart__item">
                    <div className="media">
                      <img className="dropdown-cart__img" src="assets/img/shop/products/4.jpg" alt="" />
                      <div className="media-body pl-3">
                        <a href="/" className="h6">Gentel intro to C++</a>
                        <span className="text-primary">$45.00</span>
                      </div>
                    </div>
                    <a href="/" className="dropdown-cart__item-remove">
                      <i className="ti-close"></i>
                    </a>
                  </li>
                  <li className="dropdown-cart__item">
                    <div className="media">
                      <img className="dropdown-cart__img" src="assets/img/shop/products/3.jpg" alt="" />
                      <div className="media-body pl-3">
                        <a href="/" className="h6">Programming 101</a>
                        <span className="text-primary">$79.00</span>
                      </div>
                    </div>
                    <a href="/" className="dropdown-cart__item-remove">
                      <i className="ti-close"></i>
                    </a>
                  </li>
                  <li className="px-2 py-4 text-center">
                    Subtotal: <span className="text-primary font-weight-semiBold"> $275.00</span>
                  </li>
                  <li className="px-2 pb-4 text-center">
                    <button className="btn btn-outline-primary mx-1">View Cart</button>
                    <button className="btn btn-primary mx-1">Checkout</button>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link site-search-toggler" href="/">
                  <i className="ti-search"></i>
                </a>
              </li>
            </ul>
          </div>		
        </div>
      </div> {/* ND container */}        {/* END ec-nav */}  
      </nav> 
   
  
    
    )
  }
}
export default NavBarBackup;