import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import AddNewPart from "./AddNewPart";
import Login from "../Login/Login";
import EditPart from "./EditPart";
import DeletePart from "./DeletePart";
import Orders from "./Orders";

export default class Admin extends React.Component{
    render(){
        return(
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                        <nav id="sidebar">
                            <div className="sidebar-header">
                                <h3>Админ панел</h3>
                            </div>
                            <ul className="list-unstyled components">
                                <li className="nav-item btn btn-outline-primary d-block"><a href="/admin/orders">Нарачки</a></li>
                                <li className="nav-item btn btn-outline-primary d-block"><a href="/admin/addNew">Додај нов дел</a></li>
                                <li className="nav-item btn btn-outline-primary d-block"><a href="/admin/editPart">Промени</a></li>
                                <li className="nav-item btn btn-outline-primary d-block"><a href="/admin/deletePart">Избриши</a></li>
                            </ul>
                        </nav>
                    </div>
                    <Router>
                    <div class="col-sm-9 mt-3 min-vh-75">
                        <Route path="/admin/orders" component={Orders}/>
                        <Route path="/admin/addNew" component={AddNewPart}/>
                        <Route path="/admin/editPart" component={EditPart}/>
                        <Route path="/admin/deletePart" component={DeletePart}/>
                    </div>
                    </Router>
                </div>
            </div>



        );
    }
}