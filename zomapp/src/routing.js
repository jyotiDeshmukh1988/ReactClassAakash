import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home/Home';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Footer year="2022" month="August"/>
        </BrowserRouter>
    )
}

export default Routing;