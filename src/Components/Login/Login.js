import React from 'react'

export default class Login extends React.Component{
    render(){
        return(
            <div class="container">

            <div class="row align-items-center text-center">
                <h2 className={'mb-3 mt-3'}>Ве молиме најавете се или регистрирајте се да продолжите понатаму</h2>
                <div class="col-sm-6 justify-content-center ">
                    <form id="login" class="form-group w-50">
                        <input class='form-control mb-2' type='email' placeholder={'Емаил:'}/>
                        <input class="form-control mb-2" type='password' placeholder={'Лозинка:'}/>
                        <button class="btn btn-primary">Најава</button>
                    </form>
                </div>
                <div className="col-sm-6  border-left text-center">
                    <form id="login" className="form-group">
                        <input className='form-control mb-2' type='text' placeholder={'Име'}/>
                        <input className="form-control mb-2" type='text' placeholder={'Презиме'}/>
                        <input className="form-control mb-2" type='text' placeholder={'Адреса'}/>
                        <input className="form-control mb-2" type='email' placeholder={'Емаил'}/>
                        <input className="form-control mb-2" type='password' placeholder={'Лозинка'}/>
                        <input className="form-control mb-2" type='password' placeholder={'Потврди лозинка'}/>
                        <button className="btn btn-primary m-auto">Регистрирај се</button>
                    </form>
                </div>
            </div>
            </div>
        );
    }
}