import React, {Component} from "react";
import cafes from "../assets/images/cafes.jpg"
import frapuccinos from "../assets/images/frapuccinos.jpg"
import sandwiches from "../assets/images/sandwiches.jpg"
import paninis from "../assets/images/paninis.jpg"
import helados from "../assets/images/helados.jpg"
import postres from "../assets/images/postres.jpg"

class Menu extends Component {
    render(){
        return(
            <>
           <div className="container text-center" id="menu">
                        <h2 className="mb-1 mt-2 mb-md-4 mt-md-4 text-center" style={{fontFamily: 'Kreon'}}>Menú</h2>
                    
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="col-md-6 pr-md-2 pr-0 pl-0">
                        <div className="card mb-3" id="cafes">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src={cafes} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8 d-flex">
                            <div className="card-body d-flex flex-column justify-content-center text-align-center">
                                <h4 className="card-title align-middle">Cafés</h4>
                                <div className="d-flex justify-content-between">
                                    <ul className="p-0 m-0" style={{fontFamily: 'Kreon', listStyleType: "none"}}>
                                        <li className="my-1">Café n1</li>
                                        <li className="my-1">Café n2</li>
                                        <li className="my-1">Café n3</li>
                                    </ul>
                                    <ul className="p-0 m-0" style={{fontFamily: 'Kreon', listStyleType: "none"}}>
                                        <li className="my-1">Café n4</li>
                                        <li className="my-1">Café n5</li>
                                        <li className="my-1">Café n6</li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="card mb-3" id="frapuccinos">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src={frapuccinos} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8 d-flex">
                            <div className="card-body d-flex flex-column justify-content-center">
                                <h4 className="card-title">Frapuccinos</h4>
                                <div className="d-flex justify-content-between">
                                    <ul className="p-0 m-0" style={{fontFamily: 'Kreon', listStyleType: "none"}}>
                                        <li className="my-1">Frapuccino n1</li>
                                        <li className="my-1">Frapuccino n2</li>
                                        <li className="my-1">Frapuccino n3</li>
                                    </ul>
                                    <ul className="p-0 m-0" style={{fontFamily: 'Kreon', listStyleType: "none"}}>
                                        <li className="my-1">Frapuccino n4</li>
                                        <li className="my-1">Frapuccino n5</li>
                                        <li className="my-1">Frapuccino n6</li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="card mb-3" id="sandwiches">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src={sandwiches} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8 d-flex">
                            <div className="card-body d-flex flex-column justify-content-center text-align-center">
                                <h4 className="card-title">Sandwiches</h4>
                                <div className="d-flex justify-content-between">
                                    <ul className="p-0 m-0" style={{fontFamily: 'Kreon', listStyleType: "none"}}>
                                        <li className="my-1">Sandwiche n1</li>
                                        <li className="my-1">Sandwiche n2</li>
                                        <li className="my-1">Sandwiche n3</li>
                                    </ul>
                                    <ul className="p-0 m-0" style={{fontFamily: 'Kreon', listStyleType: "none"}}>
                                        <li className="my-1">Sandwiche n4</li>
                                        <li className="my-1">Sandwiche n5</li>
                                        <li className="my-1">Sandwiche n6</li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 pl-md-2 pl-0 pr-0">
                        <div className="card mb-3" id="paninis">
                        <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={paninis} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8 d-flex">
                            <div className="card-body d-flex flex-column justify-content-center text-align-center">
                            <h4 className="card-title align-middle">Paninis</h4>
                            <div className="d-flex justify-content-between">
                                    <ul className="p-0 m-0" style={{fontFamily: 'Kreon', listStyleType: "none"}}>
                                        <li className="my-1">Panini n1</li>
                                        <li className="my-1">Panini n2</li>
                                        <li className="my-1">Panini n3</li>
                                    </ul>
                                    <ul className="p-0 m-0" style={{fontFamily: 'Kreon', listStyleType: "none"}}>
                                        <li className="my-1">Panini n4</li>
                                        <li className="my-1">Panini n5</li>
                                        <li className="my-1">Panini n6</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="card mb-3" id="helados">
                        <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={helados} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8 d-flex">
                            <div className="card-body d-flex flex-column justify-content-center">
                            <h4 className="card-title">Helados</h4>
                            <div className="d-flex justify-content-between">
                                    <ul className="p-0 m-0" style={{fontFamily: 'Kreon', listStyleType: "none"}}>
                                        <li className="my-1">Helado n1</li>
                                        <li className="my-1">Helado n2</li>
                                        <li className="my-1">Helado n3</li>
                                    </ul>
                                    <ul className="p-0 m-0" style={{fontFamily: 'Kreon', listStyleType: "none"}}>
                                        <li className="my-1">Helado n4</li>
                                        <li className="my-1">Helado n5</li>
                                        <li className="my-1">Helado n6</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="card mb-3" id="postres">
                        <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={postres} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8 d-flex">
                            <div className="card-body d-flex flex-column justify-content-center text-align-center">
                            <h4 className="card-title">Postres</h4>
                            <div className="d-flex justify-content-between">
                                    <ul className="p-0 m-0" style={{fontFamily: 'Kreon', listStyleType: "none"}}>
                                        <li className="my-1">Postre n1</li>
                                        <li className="my-1">Postre n2</li>
                                        <li className="my-1">Postre n3</li>
                                    </ul>
                                    <ul className="p-0 m-0" style={{fontFamily: 'Kreon', listStyleType: "none"}}>
                                        <li className="my-1">Postre n4</li>
                                        <li className="my-1">Postre n5</li>
                                        <li className="my-1">Postre n6</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    

                    </div>
                    
            </div>
            </>
        )
    };
};

export default Menu;