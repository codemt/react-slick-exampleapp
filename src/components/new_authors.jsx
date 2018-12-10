import React, { Component } from 'react'
import '../assets/css/cards.css'
import logo_white from '../assets/images/board_infinity_logo.png'
class NewAuthors extends Component {
   render() {
    return (

        <div style={{backgroundColor:''}}>
            <div className="row"  style={{margin:'0px',padding:'20px'}}>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" style={{padding:'0px',marginRight:'50px'}}>
                <div className="__imageboxstyle" style={{backgroundImage: `url(https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1237793.jpg)`,height:'50vh',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}></div>
            </div>
            <div className="w-100 d-sm-block d-md-none d-lg-none d-xl-none"></div>
            <div className="col" style={{padding:'0px'}}>
                <h2 className="card-title" style={{color:'#00bfff'}}> Tejas Kor</h2>
                <h2 className="text-muted card-subtitle mb-2"> UX/UI Designer,Board Infinity </h2>
                <h2> <img src={logo_white} alt='bi-logo' /> </h2>
                <br /> <br /> <br />
                <p className="card-text" style={{color:'grey'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
            </div>
        </div>

      
    )
  }
}
export default NewAuthors;