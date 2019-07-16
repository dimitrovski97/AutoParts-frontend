import React from 'react';
import Header from '../Header/Header'
import Slider from '../Slider/Slider'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "../Footer/Footer";
import SearchInput from "../SearchBox/SearchInput";
import Login from "../Login/Login";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import AutoPart from "../AutoPart/AutoPart";
import AutoPartList from "../AutoPartList/AutoPartList";
import Popular from "../Popular/Popular";
import Service1 from "../Services/service1";
import Service2 from "../Services/service2";


class App extends React.Component{
    render(){
        return(
        <div>
        <header>
                        <Header/>
        </header>
            <Router>
                <Route exact path="/" component={Slider}/>
                <div class="m-auto container row justify-content-center ">
                    <Route exact  path="/" component={SearchInput}/>
                    <Route exact path="/" component={SearchInput}/>
                    <Route exact path="/" component={SearchInput}/>
                    <Route exact path="/" component={Popular}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/autoparts" exact component={AutoPartList}/>
                    <Route exact path="/service1" exact component={Service1}/>
                    <Route exact path="/service2" exact component={Service2}/>

                </div>
        </Router>
            <Footer/>
        </div>
        );
    }
}

export default App;
