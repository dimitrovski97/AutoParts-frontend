import React from 'react'

export default class SearchInput extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div class="col-sm-4">
                <form class="form-group row">
                    <input class='col-sm-9 form-control' type='text' placeholder={this.props.name}/>
                    <button class="col-sm-2 btn btn-success"><span class="fa fa-search"></span></button>
                </form>
            </div>
        );
    }


}