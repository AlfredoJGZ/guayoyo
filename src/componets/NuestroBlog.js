import React, {Component} from "react"; 
import Articles from "./Articles"; 
import cafeteria from "../assets/images/cafeteria.jpg"
import chocolate from "../assets/images/chocolate-caliente.jpg"
import granosCafe from "../assets/images/granos-de-cafe.jpg"

class NuestroBlog extends Component{
    render(){
        return(
        <>
            <h2 className="mb-1 mt-2 mb-md-4 mt-md-4 text-center" id="sobre-nosotros" style={{fontFamily: 'Kreon'}}>Nuestro Blog</h2>
                <div className="container d-flex flex-column flex-md-row">
                    
                        <Articles home="true" />
                    
                    <div className="col-12 col-md-5 quienes-somos border border-secondary rounded p-3">
                        <h3 className="text-center" style={{fontFamily: 'Kreon'}}>Suscríbete!!!</h3>
                        <p>Suscribete a nuestra pagina para recibir información sobre nuestras promos y enterarte de nuevos articulos en nuestro blog</p>
                        <form>
                            <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Dirección Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <small id="emailHelp" className="form-text text-muted">No compartiremos tu correo.</small>
                            </div>
                            <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Nombre</label>
                            <input type="name" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Suscribirme</button>
                        </form>
                    </div>
                </div>
        </>
        );
    };
};
export default NuestroBlog;