import React from 'react'
import AutoPart from "../AutoPart/AutoPart";
import {BabelFileResult as data} from "@babel/core";
import noimage from "../Images/noimage.jpg";



export default class AutoPartList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };
    }
    componentDidMount() {
        fetch(window.location.href)
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }
    render(){
        const { data } = this.state;
        return(
            <div class="row container">
                <div class="col-sm-2  rounded m-2 ">
                    <form class="form-group border border-primary p-2">
                        <label><h3>Филтер:</h3></label>
                        <div>
                            <input type="radio" id="huey" name="drone" value="huey"
                                   checked/>
                                <label htmlFor="huey">Huey</label>
                        </div>

                        <div>
                            <input type="radio" id="dewey" name="drone" value="dewey"/>
                                <label htmlFor="dewey">Dewey</label>
                        </div>

                        <div>
                            <input type="radio" id="louie" name="drone" value="louie"/>
                                <label htmlFor="louie">Louie</label>
                        </div>
                    </form>
                </div>
                <div class="col-sm-9 justify-content-center">

                    {/*{data.map(hit =>
                        <AutoPart id={hit.id} name={hit.name} price={hit.price} manu={hit.manufacturer} cat={hit.category} qua={hit.inStockNumber}/>
                    )}*/}
                    <div className="row border border-success rounded-pill m-2">
                        <div className="col-sm-3">
                            <img src={noimage} className="rounded-circle w-100 m-2"/>
                        </div>
                    <div className="col-sm-7 align-items-center justify-content-center">
                        <h4><a className='nav-link' href={'autopart/' + this.props.id}>Име на автодел</a></h4>
                        <p>Количина: 4</p>
                        <p>Категорија: Мотор</p>
                        <p>Производител: Audi</p>
                        <button className="btn btn-outline-primary ml-auto float-right mb-2">Додај во <span
                            className="fa fa-shopping-cart"></span></button>
                    </div>

                    </div>
                    <div className="row border border-success rounded-pill m-2">
                        <div className="col-sm-3">
                            <img src={noimage} className="rounded-circle w-100 m-2"/>
                        </div>
                        <div className="col-sm-7 align-items-center justify-content-center">
                            <h4><a className='nav-link' href={'autopart/' + this.props.id}>Име на автодел</a></h4>
                            <p>Количина: 4</p>
                            <p>Категорија: Мотор</p>
                            <p>Производител: Audi</p>
                            <button className="btn btn-outline-primary ml-auto float-right mb-2">Додај во <span
                                className="fa fa-shopping-cart"></span></button>
                        </div>

                    </div>
                    <ul className="pagination ml-5">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </div>

            </div>
        );
    }

}