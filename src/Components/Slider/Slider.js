import React from 'react'
import slide1 from '../Images/image1.jpg'
import slide2 from '../Images/image2.jpg'
import slide3 from '../Images/image3.jpg'
import logo from '../Images/logo.jpg'
var divStyle = {
    position: 'relative',
    marginBottom: 20
};
var logoStyle = {
    position:'absolute', top:10, left:10, borderRadius:25
};

export default class Slider extends React.Component{
    render(){
        return(
            <div style={divStyle}>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={slide2} alt="First slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={slide3} alt="Second slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={slide1} alt="Third slide"/>
            </div>
          </div>
          <a class="carousel-control-prev text-primary" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
                <img class='d-none d-lg-block' src={logo} style={logoStyle} width='' height='' alt='' />
            </div>




        );


    }


}