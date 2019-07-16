import React from 'react'
import AutoPart from "../AutoPart/AutoPart";

export default class AutoPartList extends React.Component{
    render(){
        return(
            <div class="row container">
                <div class="col-sm-2  rounded m-2">
                    <form class="form-group">
                        <label><h3>Филтер:</h3></label>
                        <div class="row"><input type='checkbox'/><p>Мотор</p></div>
                        <div className="row"><input type='checkbox'/><p>Електрика</p></div>
                            <div className="row"> <input type='checkbox'/><p>Стакла</p></div>
                                <div className="row"><input type='checkbox'/><p>Каросерија</p></div>
                                    <div className="row"> <input type='checkbox'/><p>Систем за движење</p></div>
                                        <div className="row"> <input type='checkbox'/><p>Надворешност</p></div>
                                            <div className="row"> <input type='checkbox'/><p>Огледала</p></div>
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
                        <li className="page-item"><a className="page-link" href="#">5</a></li>
                        <li className="page-item"><a className="page-link" href="#">6</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </div>

            </div>
        );
    }

}