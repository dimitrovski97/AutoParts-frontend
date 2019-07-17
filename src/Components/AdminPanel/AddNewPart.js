import React from 'react'

export default class AddNewPart extends React.Component{
    render(){
        return(
            <form id="addNewPart" className="form-group">
                <input className='form-control mb-2' type='text' placeholder={'Име'}/>
                <input className='form-control mb-2' type='text' placeholder={'Цена'}/>
                <input className='form-control mb-2' type='text' placeholder={'Категорија'}/>
                <input className='form-control mb-2' type='text' placeholder={'Производител'}/>
                <input className='form-control mb-2' type='text' placeholder={'Количина'}/>
                <button className="btn btn-primary m-auto">Додади</button>
            </form>
        );
    }
}