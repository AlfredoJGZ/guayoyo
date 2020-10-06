import React, {Component} from "react"; 
import Articles from "./Articles"; 

class Search extends Component {

     

   

    render(){
        let busqueda = this.props.match.params.busqueda;
        return(
            <>
            
            <div className="container">
                <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center mb-4">
        <h3 className="card-title mb-0" style={{fontFamily: 'Kreon'}}>Listado de busqueda</h3>
                        <label>Buscar:<input type="search" className="form-control form-control-sm" placeholder="" aria-controls="example1" /></label>
                    </div>
                    <div className="row">
                    <div className="col-sm-12 col-md-6">
                    <div id="example1_filter" className="dataTables_filter">
                        
                        </div>
                    </div>
                    </div>

            <Articles busqueda={busqueda} />

           
            </div>
                
            </div>
            </>
        );
    };
};

export default Search; 