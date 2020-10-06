import React, {Component} from "react";

class HeroBlog extends Component {
    render(){
        return(
            <div className="vw-100 p-4 d-flex justify-content-center container-xl" style={{maxWidth: 1600 +"px" , maxHeight: 689 + "px"}}>
                <div className="position-relative d-flex justify-content-between align-items-center flex-column">
                    <p className="mb-0 fs-10" style={{fontFamily: 'Kreon'}}>- Blog -</p>
                </div>
            </div>
        ); 
    }; 
};

export default HeroBlog; 