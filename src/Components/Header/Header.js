import React from 'react'

export default class Header extends React.Component{

    render(){
        return(
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
              <a class="navbar-brand ml-5" href="/">АвтоВозач</a>

              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link  h3 mb-0" href="/"><span className="fa fa-home"></span></a>
                    </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/autoparts">Авто Делови</a>
                  </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/service1">Технички преглед</a>
                    </li>
                  <li class="nav-item">
                    <a class="nav-link" href="service2">Осигурување</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/login"><span class="fa fa-user"></span> Најава</a>
                  </li>
                    <li class="nav-item">
                        <a className="nav-link h3" href="/card"><span className="fa fa-shopping-cart"></span></a>
                    </li>
                </ul>
              </div>
            </nav>


        );
    }


}
