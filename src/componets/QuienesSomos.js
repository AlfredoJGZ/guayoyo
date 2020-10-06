import React, {Component} from "react"; 
import quienesSomos from "../assets/images/quienes-somos.jpg"

class QuienesSomos extends Component {
    render(){
        return(
            <>

            <h2 id="quienes-somos" className="mb-1 mt-2 mb-md-4 mt-md-4 text-center" style={{fontFamily: 'Kreon'}}>Quienes Somos</h2>
        
                <div className="container d-flex flex-column flex-md-row text-center">

                <div className="quienes-somos col-md-6 rounded" style={{backgroundImage: "url('"+quienesSomos+"')" , backgroundPosition: "center"+""+"center", backgroundSize: "cover", backgroundRepeat: "no-repeat", width: 100 + "%"}}>
                </div>

                <div className="container mw-50 mt-2 mt-md-0 d-flex flex-column justify-content-center align-items-center">
                    <h2 className="mb-4" style={{fontFamily: 'Kreon'}}>Guayoyo Café</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestiae nulla explicabo ab fuga, 
                        eos praesentium asperiores animi dolorum. Numquam molestiae quas delectus enim natus omnis distinctio,
                        dolor quisquam. Veniamdolor sit amet consectetur adipisicing elit. Porro molestiae nulla explicabo ab fuga, 
                        eos praesentium asperiores animi dolorum.<br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestiae nulla explicabo ab fuga, 
                        eos praesentium asperiores animi dolorum. Numquam molestiae quas delectus enim natus omnis distinctio,
                        dolor quisquam.
                    </p>
                </div>
            </div>

            </>
        );
    }
};

export default QuienesSomos; 