import React from 'react'
import noimage from '../Images/noimage.jpg'

export default class AutoPart extends React.Component{
    render(){
        return(
            <div class="row border border-success rounded-pill m-2">
                <div class="col-sm-3">
                    <img src={noimage} class="rounded-circle w-100 m-2"/>
                </div>
                <div class="col-sm-7 align-items-center justify-content-center">
                    <h4><a class='nav-link' href='autopart.html'>Име на автодел</a></h4>
                    <p>Количина: 4</p>
                    <p>Категорија: Мотор</p>
                    <p>Производител: Audi</p>
                    <button class="btn btn-outline-primary ml-auto float-right mb-2">Додај во <span class="fa fa-shopping-cart"></span></button>

                </div>
            </div>
        );
    }

}