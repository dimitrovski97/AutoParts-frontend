import React from 'react'

export default class DeletePart extends React.Component{
    render(){
        return(
            <form className="form-group">
                <input className="form-control mb-2" type={"text"} placeholder={"Внеси го бројот на делот"}/>
                <button className="btn btn-danger mb-2 ">Избриши</button>
            </form>
        );
    }
}