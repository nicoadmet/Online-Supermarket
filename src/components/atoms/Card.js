import styles from '@/styles/Home.module.css'
import styled from 'styled-components'
import React from 'react'
import Button from './Button'


const Card = (props) => {
 // const {img,title,precio,id} = data
  return (
    <>

        <Cards className={styles.figure}>
        <Image src= {props.data.img} alt=""/>
        <figcaption>
            <Producto>{props.data.title}</Producto>
        </figcaption>
                                                
            <Peso>1 kg.</Peso><Precio >${props.data.precio}</Precio>
            
        <Button Content="Agregar" OnClick = {() => props.addToCart(props.data.id)} />   
        </Cards>
        

    </>
  )
}

export default Card

const Cards = styled.figure`
width: 220px;
height: 330px;
border-radius: 5px;
background-color: white;
border: 1px solid transparent;

`


const Image = styled.img`
width: 100%;
height: 50%;
object-fit:cover;

`

const Producto = styled.h3`
line-height: 3;
margin-left: 2rem;
font-size: 1.1rem;
font-weight: 600;
color: rgb(3, 84, 77);


`
const Precio = styled.a
`
font-size: 1.3rem;
color: rgb(255, 129, 38);
border-radius: 5px;
text-decoration: none;


`
const Peso = styled.a
`
font-size: 0.9rem;
color: rgb(152, 155, 160);
background-color: rgb(233, 233, 233);
padding: 5px 15px;
margin-right: 2rem;
margin-left: 2rem;
border-radius: 5px;
text-decoration: none;


`
