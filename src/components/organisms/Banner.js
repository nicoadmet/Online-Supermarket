import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


const Banner = () => {
  return (
    
    <Section>
        <Carousel className="sliders">
            <Carousel.Item className="sliders-item">
                
                    <img
                        className="sliders-img"
                        src= "./images-carousel/fruits1.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="sliders-caption">
                        <i><h3>Bienvenidos a <span>Freshness</span></h3></i>
                        <i><p>El mejor lugar para realizar tus compras</p></i>      
                    </Carousel.Caption>
                
            </Carousel.Item>

            <Carousel.Item className="sliders-item">
                <img
                    className="sliders-img"
                    src= "./images-carousel/fruits2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption className="sliders-caption">
                     <i><h3>Servicio de <b>Calidad</b></h3></i>
                     <i><p>Para toda la región</p> </i>      
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="sliders-item"> 
                <img
                    className="sliders-img"
                    src= "./images-carousel/employee.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className="sliders-caption">
                     <i><h3>Nueva tienda <span>100% Online</span> </h3></i>
                     <i><p>Para comprar desde casa</p> </i>      
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
    </Section>
 )
    
}

export default Banner

const Section = styled.div`
margin-top: 94px;

`


