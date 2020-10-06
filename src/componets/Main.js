import React, {Component} from "react";
import cafes from "../assets/images/cafes.jpg"
import frapuccinos from "../assets/images/frapuccinos.jpg"
import sandwiches from "../assets/images/sandwiches.jpg"
import paninis from "../assets/images/paninis.jpg"
import helados from "../assets/images/helados.jpg"
import postres from "../assets/images/postres.jpg"
import { HashLink as Link } from "react-router-hash-link";

class Main extends Component {

    render(){
        return(
            <>
            <div className="container text-center" id="menu">
                        <h2 className="mb-1 mt-2 mb-md-4 mt-md-4 text-center" style={{fontFamily: 'Kreon'}}>Menú</h2>
                    
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="col-md-6 pr-md-2 pr-0 pl-0">
                        <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src={cafes} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8 d-flex">
                            <div className="card-body d-flex flex-column justify-content-center text-align-center">
                                <h4 className="card-title align-middle">Cafés</h4>
                                <p><Link to="/menu/#cafes" href="#">Ver todos los café &gt;&gt;</Link></p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src={frapuccinos} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8 d-flex">
                            <div className="card-body d-flex flex-column justify-content-center">
                                <h4 className="card-title">Frapuccinos</h4>
                                <p><Link to="/menu/#frapuccinos" href="#">Ver todos los frapuccinos &gt;&gt;</Link></p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src={sandwiches} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8 d-flex">
                            <div className="card-body d-flex flex-column justify-content-center text-align-center">
                                <h4 className="card-title">Sandwiches</h4>
                                <p><Link to="/menu/#sandwiches" href="#">Ver todos los sandwiches &gt;&gt;</Link></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 pl-md-2 pl-0 pr-0">
                        <div className="card mb-3">
                        <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={paninis} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8 d-flex">
                            <div className="card-body d-flex flex-column justify-content-center text-align-center">
                            <h4 className="card-title align-middle">Paninis</h4>
                            <p><Link to="/menu/#paninis" href="#">Ver todos los paninis &gt;&gt;</Link></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={helados} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8 d-flex">
                            <div className="card-body d-flex flex-column justify-content-center">
                            <h4 className="card-title">Helados</h4>
                            <p><Link to="/menu/#helados" href="#">Ver todos los helados &gt;&gt;</Link></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={postres} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8 d-flex">
                            <div className="card-body d-flex flex-column justify-content-center text-align-center">
                            <h4 className="card-title">Postres</h4>
                            <p><Link to="/menu/#postres" href="#">Ver todos los postres &gt;&gt;</Link></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    

                    </div>
                    <div className="container px-0 d-flex justify-content-end"> 
                        <a href="#"><button type="button" className="btn btn-primary btn-lg mt-4">Ir a menú</button></a>
                    </div>
            </div>
            </>
        );
    };
};

export default Main; 
