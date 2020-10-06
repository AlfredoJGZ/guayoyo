import React, {Component} from "react";
import logo from '../assets/images/logo-copy.svg';

class Hero extends Component {

    render(){
        return(
        <>  
          <div className="hero vw-100 p-4 d-flex justify-content-center container-xl" style={{maxWidth: 1600 +"px" , maxHeight: 689 + "px"}}>
              <div className="position-relative d-flex justify-content-between align-items-center flex-column">
                  <p className="mb-0 fs-10" style={{fontFamily: 'Kreon'}}>Guayoyo Café</p>
                  <img className="w-50" src={logo} alt="Logo Guayoyo Café" />
                  <p className="fw-700 m-0 fs-5" style={{fontFamily: 'Kreon'}}>- Pub & Lounge -</p>
              </div>
          </div>
        </>
        );
    };
};

export default Hero; 