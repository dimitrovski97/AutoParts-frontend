import React from 'react'
import imageUrl from '../Images/noimage.jpg'
var divStyle = {
    position: 'relative',
    marginBottom: 20,
    padding: 20,
    borderRadius: 20
};
var textStyle = {
    position:'absolute', top:-10, left:-10, borderRadius:25, background:'orange'
};

export default class Popular extends React.Component{
    render(){
        return(

            <div style={divStyle} class="row  border border-success pt-5 mt-4">
                <h4 class="text-white p-2" style={textStyle}>Популарно</h4>
                <div class="col-sm-3">
                    <img className={'w-100'} src={imageUrl}/>
                    <h3 class="float-right text-success">200ден.</h3>
                </div>
                <div className="col-sm-3">
                    <img className={'w-100'} src={imageUrl}/>
                    <h3 className="float-right text-success">200ден.</h3>
                </div>
                <div className="col-sm-3">
                    <img className={'w-100'} src={imageUrl}/>
                    <h3 className="float-right text-success">200ден.</h3>
                </div>
                <div className="col-sm-3">
                    <img className={'w-100'} src={imageUrl}/>
                    <h3 className="float-right text-success">200ден.</h3>
                </div>
            </div>
        );
    }
}