import React, {Component} from "react"; 
import {BrowserRouter , Route , Switch} from "react-router-dom"; 
import Nav from "./componets/Nav";
import Hero from "./componets/Hero";
import HeroBlog from "./componets/HeroBlog";
import Home from "./componets/Home";
import Blog from "./componets/Blog";
import Footer from "./componets/Footer";
import Menu from "./componets/Menu";
import Search from "./componets/Search"; 
 

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <header>
                    <Nav />
                        <Switch>
                            <Route exact path="/" component={ Hero }/>
                            <Route path="/blog" component={ HeroBlog }/>
                        </Switch>
                </header>

                <Switch>
                    <Route exact path="/?" component={ Home }/>
                    <Route exact path="/menu" component={ Menu }/>
                    <Route exact path="/blog" component={ Blog }/>
                    <Route exact path="/blog/buscar/:busqueda" component={ Search }/>
                    <Route exact path="/blog/articulo/:id" render={
                        () => {
                            return(
                            <h1>PAGINA INDIVIDUAL DE ARTICULO</h1>
                            ); 
                        }
                    }/>
                </Switch>
                 
                <footer>
                    <Footer />
                </footer>  
            </BrowserRouter>
        );
    };
};

export default Router; 