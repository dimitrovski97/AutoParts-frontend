import React from 'react'
import noimage from '../Images/noimage.jpg'

export default class AutoPart extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div class="row border border-success rounded-pill m-2">
                <div class="col-sm-3">
                    <img src={noimage} class="rounded-circle w-100 m-2"/>
                </div>
                <div class="col-sm-7 align-items-center justify-content-center">
                    <h4><a class='nav-link' href={'autopart/'+this.props.id}>{this.props.name}</a></h4>
                    <p>Количина: {this.props.inStockNumber}</p>
                    <p>Категорија: {this.props.cat}</p>
                    <p>Производител: {this.props.manu}</p>
                    <a class="btn btn-outline-primary ml-auto float-right mb-2" href={"/AddToCard/"+this.props.id}>Додај во <span class="fa fa-shopping-cart"></span></a>

                </div>
            </div>
        );
    }

}