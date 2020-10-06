import React, {Component} from "react";
import QuienesSomos from "./QuienesSomos";
import NuestroBlog from "./NuestroBlog";
import Main from "./Main";
import DondeEstamos from "./DondeEstamos";
import {useHistory} from "react-router-dom";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class Home extends Component {


    render(){
        return(
            <>
                <main>
                    <Main /> 
                </main>

                <section>
                    <QuienesSomos />
                </section>

                <section>
                    <DondeEstamos />
                </section>
            
                <section>
                    <NuestroBlog />
                </section>
            </>
        );
    };
};

export default Home; 