import React from 'react'
import AutoPart from "../AutoPart/AutoPart";

export default class AutoPartList extends React.Component{
    render(){
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
                    <AutoPart/>
                    <AutoPart/>
                    <AutoPart/>
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