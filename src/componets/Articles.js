import React, {Component, useState , useEffect} from "react"; 
import axios from "axios";
import cafeteria from "../assets/images/cafeteria.jpg";
import Global from "../Global";
import Moment from "react-moment";
import "moment/locale/es";
import {Link} from "react-router-dom";

class Articles extends Component{

    url = Global.url; 

    display = "d-flex";

    articlesPage = [];

    state = {
        articles: [],
        status: "null",
        page: 1,
        totalPages : 0
    };


   componentWillMount(){
       var home = this.props.home;
       var busqueda = this.props.busqueda; 

       if(home === "true"){
            this.getLastArticles();
       } else if(busqueda !== null && busqueda !== undefined){
            this.getArticlesBySearch(busqueda);
       } else {
            this.getArticles(); 
       };
        
   };

   getLastArticles= () => {
    axios.get(this.url + "/articles/last")
        .then((res) => {
            this.setState({
                articles: res.data.article,
                status: "success",
                home: "true"
            });
            console.log(this.state);
        });        
    } 

    getArticles= () => {
        
        axios.get(this.url + "/articles")
            .then((res) => {
                this.setState({
                    articles: res.data.article, 
                    status: "success"
                });
                let nPages = (Math.ceil(this.state.articles.length / 4)); 
                this.setState({
                    totalPages : nPages
                })
                console.log(this.state);
            });        
    } 

    getArticlesBySearch = (busqueda) => {

        console.log(this.url + "/search/" + busqueda);
        axios.get(this.url + "/search/" + busqueda)
        .then((res) => {
            this.setState({
                articles: res.data.article, 
                status: "success"
            });
            let nPages = (Math.ceil(this.state.articles.length / 4)); 
            this.setState({
                totalPages : nPages
            })
            console.log(this.state);
        }); 
                  
    } 




    hicisteClick= (e,s,p) => {
        e.preventDefault();

        if(s =="a"){
            
            this.setState({
                page : this.state.page -1
            }); 
            console.log("DISTE CLICK A ANTERIOR "+this.state.page);
        } else if(s == "s"){
            
            this.setState({
                page : this.state.page +1
            });
            console.log("DISTE CLICK A SIGUIENTE "+this.state.page);
        }

        if(p !== undefined){
            console.log("PAGINA "+p);
            this.setState({
                page : p
            }); 
            
        }

        this.articlesPage = []; 



       
        console.log("Indice: "+this.state.page);
        console.log("probando los redondeos: "+Math.ceil(1.25,1));
        
    }

    

    render(){

        if(this.state.articles.length >= 1){

                
                // ASIGNA LOS VALORES RECOGIDOS DE LA API A LA VARIABLE articlesPage
                for(let i = (this.state.page -1) * 4 ; i < (this.state.page -1) * 4 + 4 ; i++){
                    this.articlesPage[i] = this.state.articles[i];
                    if(this.state.articles[i+1] == undefined){
                        break; 
                    }
       
                }
            
                 let listArticles = this.articlesPage.map((article, i=this.state.page) => {
                        return(
                    

                        <div className={this.state.home == "true" ? ("d-flex card mr-2"): ("d-flex card")} key={article._id}>


                            { article.image !== null ? (
                                <img src={this.url + "/get-image/" + article.image} className="card-img-top" alt={article.title} />
                            ) : (
                                <img src={cafeteria} className="card-img-top" alt={article.title} />    
                            )

                            }
                            
                            <div className="card-body">
                                <h5 className="card-title">{article.title +"  "+ this.state.status}</h5>
                                <Moment fromNow><small>{article.date}</small></Moment>
                        <p className="card-text pt-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p><Link to={"/blog/articulo/" + article._id}> Ver entrada &gt;&gt;</Link></p>
                            </div>
                        </div>   
                    
                );
            });
        
        return(
            <>
                <div className={this.state.home == "true" ? ("col-12 col-md-7 d-flex flex-column flex-md-row px-0 quienes-somos") : ("col-12 mb-4 d-flex flex-column flex-md-row flex-wrap wrapper container")}>
                { 
                    listArticles
                }
                </div>
                

                <nav className={this.state.articles.length > 4 ? ("d-block") + " ml-auto mr-auto mb-2" : ("d-none") +" ml-auto mr-auto mb-2"} aria-label="paginador del blog">
                <ul className="pagination">
                    <li className={this.state.page == 1 ? ("disabled")+" page-item" : ("page-item")}>
                        <a onClick={(e) =>this.hicisteClick(e,"a")}className="page-link" style={{outline : "none" , boxShadow :"none"}} href="#" aria-label="Anterior">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>

                    <li className={this.state.page == (this.state.page > 3 ? (this.state.page - 2) : (1)) ? ("page-item active"):("page-item")}>
                        <a onClick={(e) =>this.hicisteClick(e,"",(this.state.page > 3 ? (this.state.page -1) : (1)))} className="page-link" style={{outline : "none" , boxShadow :"none"}} href="#">{this.state.page > 3 ? (this.state.page - 2) : (1)}</a>
                    </li>

                    <li className={this.state.page == (this.state.page > 3 ? (this.state.page - 1) : (2)) ? ("page-item active"):("page-item")}>
                        <a onClick={(e) =>this.hicisteClick(e,"",(this.state.page > 3 ? (this.state.page -1) : (2)))}className="page-link" style={{outline : "none" , boxShadow :"none"}} href="#">{this.state.page > 3 ? (this.state.page - 1) : (2)}</a>
                    </li>

                    <li className={this.state.articles.length > 8 ? ((this.state.page == (this.state.page > 3 ? (this.state.page) : (3)) ? (" page-item active"):("page-item"))) : ("d-none")}>
                        <a onClick={(e) =>this.hicisteClick(e,"",(this.state.page > 3 ? (this.state.page) : (3)))}className="page-link" style={{outline : "none" , boxShadow :"none"}} href="#">{this.state.page > 3 ? (this.state.page) : (3)}</a>
                    </li>

                    <li className={this.state.page == this.state.totalPages ? ("disabled")+" page-item" : ("page-item")}>
                        <a onClick={(e) =>this.hicisteClick(e,"s")} className="page-link" style={{outline : "none" , boxShadow :"none"}} href="#" aria-label="Siguiente">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
            </>
        );
        
            
        } else if(this.state.articles.lenght === 0 && this.state.status === "success"){
            return(
                <h2>No hay contenido para mostrar</h2>
            );
        } else {
            return(
                <>
                <h2>Cargando...</h2>
                <p>Espere mientras cargan los artculos</p>
                </>
            );
        }; 
    };
};

export default Articles; 


