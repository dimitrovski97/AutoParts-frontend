import React from 'react'
import './footer.css'

export default class Footer extends React.Component{
    render(){
        return(
            <footer id="myFooter">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7">
                            <h2 className="logo"><a href="#">АвтоВозач</a></h2>
                        </div>
                        <div className="col-sm-2">
                            <h5>Мени</h5>
                            <ul>
                                <li><a href="/">Почетна</a></li>
                                <li><a href="/autoparts">Авто Делови</a></li>
                                <li><a href="#">Гуми</a></li>
                                <li><a href="#">Услуги</a></li>
                                <li><a href="/login">Најава</a></li>
                            </ul>
                        </div>

                        <div className="col-sm-3">
                            <div className="social-networks">
                                <a href="#" className="facebook"><span
                                    className="fa fa-facebook"></span></a>
                                <a href="#" className="twitter"><span
                                    className="fa fa-twitter"></span></a>
                                <a href="#" className="google"><span
                                    className="fa fa-google-plus"></span></a>
                            </div>
                            <button id="contact-btn" type="button" className="btn btn-default">Контактирајте не</button>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>© 2019 Copyright - АвтоВозач</p>
                </div>
            </footer>
        );

    }

}