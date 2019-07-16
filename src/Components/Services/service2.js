import React from 'react'
import picture from '../Images/osiguruvanje.jpg'
import Popular from "../Popular/Popular";
var pictureStyle = {
    borderRadius:25
};

export default class Service2 extends React.Component{
    render(){
        return(
            <div class="row mt-2">
                <div class="col-sm-4">
                    <img class='w-100 mt-3'src={picture} style={pictureStyle} />
                </div>
                <div class="col-sm-8 mt-2">
                    <h2>Осигурување</h2>
                    <p>Осигурителното брокерско друштво Нов Осигурителен Брокер е Ваш консултант, посредник и застапник за сите
                        работи и прашања од сферата на осигурувањето, кој Ве застапува пред осигурителните компании и бара
                        најсоодветна понуда за осигурување според Вашите потреби.

                        Услугите на брокерот се бесплатни.

                    </p>
                    <p class="mt-5 mb-5">
                        Посетете ги нашите салони за подетални информации
                    </p>
                </div>

                <Popular/>
            </div>
        );
    }
}