import React, { Component } from 'react'
import Slider from 'react-slick'
import logo_white from '../assets/images/board_infinity_logo.png';
import '../assets/css/slider.css';
import '../assets/css/testimonials.css';
class Panel5 extends Component {
   render() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode:true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:true,
        className:'slides',
        centerPadding: 0
      };


    return (

        <div> 
        <Slider {...settings}>
        <div  className="nav nav-justified" id="nav-tabs" role="">
        <li role="presentation" className="active nav-item"> <a href="#daksh" aria-controls="daksh" role="tab" data-toggle="tab" className="nav-link">

            <img  alt="" className="rounded-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/dakshbhagya/128.jpg" />

            <span className=""><i className="fa fa-quote-left"></i></span>

            </a>
            <div className="tab-inner" style={{textAlign : 'center',marginTop:'50px'}}>

                    <p className="lead">Etiam tincidunt enim et pretium efficitur. Donec auctor leo sollicitudin
                        eros iaculis sollicitudin.</p>
                    <hr />
                    <p><strong className="text-uppercase">Dustin Lamont</strong>
                    </p>
                    <p> UX/UI Designer , Board Infinity </p>
                    <h2>   <img src={logo_white} alt='bi-logo' /> </h2>
                    {/* <p><em className="text-capitalize"> Senior web developer</em> at <a href="/">Apple</a>  </p> */}
           
            </div>
        </li>
        </div>
         <div  className="nav nav-justified" id="nav-tabs" role="">
        <li role="presentation" className="active nav-item"> <a href="#daksh" aria-controls="daksh" role="tab" data-toggle="tab" className="nav-link">

            <img  alt="" className="rounded-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/dakshbhagya/128.jpg" />

            <span className=""><i className="fa fa-quote-left"></i></span>

            </a>
            <div className="tab-inner" style={{textAlign : 'center',marginTop:'50px'}}>
            
                    <p className="lead">Etiam tincidunt enim et pretium efficitur. Donec auctor leo sollicitudin
                        eros iaculis sollicitudin.</p>
                    <hr />
                    <p><strong className="text-uppercase">Dustin Lamont</strong>
                    </p>
                    <p> UX/UI Designer , Board Infinity </p>
                    <h2>   <img src={logo_white} alt='bi-logo' /> </h2>
                    {/* <p><em className="text-capitalize"> Senior web developer</em> at <a href="/">Apple</a>  </p> */}
           
            </div>
        </li>
        </div>
        <div  className="nav nav-justified" id="nav-tabs" role="">
        <li role="presentation" className="active nav-item"> <a href="#daksh" aria-controls="daksh" role="tab" data-toggle="tab" className="nav-link">

            <img  alt="" className="rounded-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/dakshbhagya/128.jpg" />

            <span className=""><i className="fa fa-quote-left"></i></span>

            </a>
            <div className="tab-inner" style={{textAlign : 'center',marginTop:'50px'}}>
            
                    <p className="lead">Etiam tincidunt enim et pretium efficitur. Donec auctor leo sollicitudin
                        eros iaculis sollicitudin.</p>
                    <hr />
                    <p><strong className="text-uppercase">Dustin Lamont</strong>
                    </p>
                    <p> UX/UI Designer , Board Infinity </p>
                    <h2>   <img src={logo_white} alt='bi-logo' /> </h2>
                    {/* <p><em className="text-capitalize"> Senior web developer</em> at <a href="/">Apple</a>  </p> */}
           
            </div>
        </li>
        </div>
        <div  className="nav nav-justified" id="nav-tabs" role="">
        <li role="presentation" className="active nav-item"> <a href="#daksh" aria-controls="daksh" role="tab" data-toggle="tab" className="nav-link">

            <img  alt="" className="rounded-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/dakshbhagya/128.jpg" />

            <span className=""><i className="fa fa-quote-left"></i></span>

            </a>
            <div className="tab-inner" style={{textAlign : 'center',marginTop:'50px'}}>
            
                    <p className="lead">Etiam tincidunt enim et pretium efficitur. Donec auctor leo sollicitudin
                        eros iaculis sollicitudin.</p>
                    <hr />
                    <p><strong className="text-uppercase">Dustin Lamont</strong>
                    </p>
                    <p> UX/UI Designer , Board Infinity </p>
                    <h2>   <img src={logo_white} alt='bi-logo' /> </h2>
                    {/* <p><em className="text-capitalize"> Senior web developer</em> at <a href="/">Apple</a>  </p> */}
           
            </div>
        </li>
        </div>
        <div  className="nav nav-justified" id="nav-tabs" role="">
        <li role="presentation" className="active nav-item"> <a href="#daksh" aria-controls="daksh" role="tab" data-toggle="tab" className="nav-link">

            <img  alt="" className="rounded-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/dakshbhagya/128.jpg" />

            <span className=""><i className="fa fa-quote-left"></i></span>

            </a>
            <div className="tab-inner" style={{textAlign : 'center',marginTop:'50px'}}>
            
                    <p className="lead">Etiam tincidunt enim et pretium efficitur. Donec auctor leo sollicitudin
                        eros iaculis sollicitudin.</p>
                    <hr />
                    <p><strong className="text-uppercase">Dustin Lamont</strong>
                    </p>
                    <p> UX/UI Designer , Board Infinity </p>
                    <h2>   <img src={logo_white} alt='bi-logo' /> </h2>
                    {/* <p><em className="text-capitalize"> Senior web developer</em> at <a href="/">Apple</a>  </p> */}
           
            </div>
        </li>
        </div>
      </Slider>
           
      </div>

      
    )
  }
}
export default Panel5;