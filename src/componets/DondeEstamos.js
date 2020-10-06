import React, {Component} from "react"; 

class DondeEstamos extends Component {

    render(){
        return(
            <>
            <h2 className="mb-1 mt-2 mb-md-4 mt-md-4 text-center" id="donde-estamos" style={{fontFamily: 'Kreon'}}>Donde Estamos</h2>
            <div className="container">
                <div id="map" className="quienes-somos rounded">
                </div>
            </div>
            </> 
        );
    };
};

export default DondeEstamos; 