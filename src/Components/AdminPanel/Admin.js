import React from 'react'

export default class Admin extends React.Component{
    render(){
        return(
            <div class="col-sm-2">
            <nav className="nav flex-column">
                <a className="nav-link active" href="#">Нарачки</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link disabled" href="#">Disabled</a>
            </nav>
            </div>




        );
    }
}