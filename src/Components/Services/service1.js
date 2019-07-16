import React from 'react'
import picture from '../Images/tehnicki.jpg'
import Popular from "../Popular/Popular";
var pictureStyle = {
   borderRadius:25
};

export default class Service1 extends React.Component{
    render(){
        return(
            <div class="row mt-2">
                <div class="col-sm-4">
                    <img class='w-100 mt-3'src={picture} style={pictureStyle} />
                </div>
                <div class="col-sm-8 mt-2">
                    <h2>Технички преглед</h2>
                    <p>Техничкиот преглед е постапка со која што правното лице за технички преглед ги утврдува податоците во врска
                        со возилото, неговите системи, составни делови,самостојни технички единици и опрема, како и исполнувањето
                        на други барања за нив определени со Законот за возила, прописите донесени врз основа на тој Закон како и
                        упатствата на производителот на уредите и опремата што се употребуваат при техничките прегледи.
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