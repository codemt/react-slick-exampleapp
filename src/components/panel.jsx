import React, { Component } from 'react'
import Slider from "react-slick";
import '../assets/css/slider.css';
import '../assets/css/testimonials.css';
class Panel extends Component {
  render() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
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
                            <div className="img" ><img src="https://image.ibb.co/hgy1M7/5a6f718346a28820008b4611_750_562.jpg" /></div>
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
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    )
  }
}
export default Panel;