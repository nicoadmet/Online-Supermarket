import styled from 'styled-components'
import React from 'react'
import ButtonRed from '../atoms/ButtonRed';


const CartItems = ({data, deleteFromCart}) => {
    let {title, img, precio, id, quantity,subtotal} = data;
    

    return (
        <Cards>
            <Image src= {img} alt=""/>
            <Name><b>{title}</b> <br />{precio} x {quantity} = $ {subtotal} </Name>
            <ButtonRed OnClick={() => deleteFromCart(id)} Content = "Eliminar uno" />
            <ButtonRed OnClick={() => deleteFromCart(id, true)} Content = "Eliminar todos" />

        </Cards>
    );

};

export default CartItems;

const Cards = styled.figure`
display:grid;
grid-template-columns: repeat(auto-fit,minmax(5vw,10vw));
grid-template-rows: 40px, 30px 30px;
grid-gap: 10px;

border-radius: 5px;
background-color: #f8f9fa;
border: 1px solid transparent;
color: black;

margin-left:10px;

@media(max-width:600px){
    display:flex;
    flex-direction:column;
    align-items:center;
}

`

const Image = styled.img`

width: 150px;
height: 70px;
object-fit: contain;
border: 1px solid transparent;


`

const Name = styled.p`

align-self:center;
padding-bottom: 25px;
color: black;

`
