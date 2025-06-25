import styled from 'styled-components'
import React from 'react'
import CardsList from '../molecules/CardList'

const Products = (props) => {
  return (
    <>
    <Product>

    <CardsList OnClick={props.OnClick}/>
    

    </Product>

   
    </>
  )
}

export default Products

const Product = styled.div`
background-color: white;
width: 100%;
color: black;
font-weight: bold;



`