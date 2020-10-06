import React, {Component} from "react"; 
import Articles from "./Articles"; 

class Blog extends Component {

    state = {
        page: 1
    };

    paginar = (e) =>{
        e.preventDefault();
        this.setState({
            page: this.state.page + 1
        });
       
    };

    returnArticles = () =>{
        return(
            <Articles page={this.state.page} />
            
        );
    };

   

    render(){
        return(
            <>
            
            <div className="container">
                <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center mb-4">
                        <h3 className="card-title mb-0" style={{fontFamily: 'Kreon'}}>Listado de entradas</h3>
                        <label>Buscar:<input type="search" className="form-control form-control-sm" placeholder="" aria-controls="example1" /></label>
                    </div>
                    <div className="row">
                    <div className="col-sm-12 col-md-6">
                    <div id="example1_filter" className="dataTables_filter">
                        
                        </div>
                    </div>
                    </div>
            <Articles />

           
            </div>
                
            </div>
            </>
        );
    };
};

export default Blog; 