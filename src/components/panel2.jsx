import React, { Component } from 'react'
import Slider from "react-slick";
import '../assets/css/slider.css';
import '../assets/css/testimonials.css';
class Panel2 extends Component {
  render() {
    var settings = {

        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 1,
        speed: 500,
        dots:true
      };
    return (

        <div>
        <Slider {...settings}>
        <div>

              <div className="container-fluid">
                    <div className="row">
                        <div className="col testim" id="testim">
                            <div className="wrap"><span id="right-arrow" className="arrow right fa fa-chevron-right"></span><span id="left-arrow" className="arrow left fa fa-chevron-left"></span>
                                {/*<ul id="testim-dots" className="dots">
                                    <li className="dot active"></li>
                                    <li className="dot"></li>
                                </ul> */ }
                                <div id="testim-content" className="cont" >
                                    <div className="active">
                                        <div className="img" ><img src="https://image.ibb.co/hgy1M7/5a6f718346a28820008b4611_750_562.jpg" alt="" /></div>
                                        <p style={{paddingTop: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                        <h2>Tejas Kor </h2>
                                        <p> UX/UI Designer , Board Infinity </p>
                                        <h2> LOGO </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>

        </div>
        <div>
                    <div className="container-fluid">
                          <div className="row">
                              <div className="col testim" id="testim">
                                  <div className="wrap"><span id="right-arrow" className="arrow right fa fa-chevron-right"></span><span id="left-arrow" className="arrow left fa fa-chevron-left"></span>
                                      {/*<ul id="testim-dots" className="dots">
                                          <li className="dot active"></li>
                                          <li className="dot"></li>
                                      </ul> */ }
                                      <div id="testim-content" className="cont" >
                                          <div className="active">
                                              <div className="img" ><img src="https://image.ibb.co/hgy1M7/5a6f718346a28820008b4611_750_562.jpg" alt="" /></div>
                                              <p style={{paddingTop: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                              <h2>Tejas Kor </h2>
                                              <p> UX/UI Designer , Board Infinity </p>
                                              <h2> LOGO </h2>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                </div>
        </div>
        <div>
               <div className="container-fluid">
                    <div className="row">
                        <div className="col testim" id="testim">
                            <div className="wrap"><span id="right-arrow" className="arrow right fa fa-chevron-right"></span><span id="left-arrow" className="arrow left fa fa-chevron-left"></span>
                                {/*<ul id="testim-dots" className="dots">
                                    <li className="dot active"></li>
                                    <li className="dot"></li>
                                </ul> */ }
                                <div id="testim-content" className="cont" >
                                    <div className="active">
                                        <div className="img" ><img src="https://image.ibb.co/hgy1M7/5a6f718346a28820008b4611_750_562.jpg" alt="" /></div>
                                        <p style={{paddingTop: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                        <h2>Tejas Kor </h2>
                                        <p> UX/UI Designer , Board Infinity </p>
                                        <h2> LOGO </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
              </div>
        </div>
      </Slider>
      </div>
    )
  }
}
export default Panel2;