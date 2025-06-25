import React, {  useReducer, useState } from 'react'
import { TYPES } from '../../actions/ShoppingActions.js'
import CartItems from '../molecules/CartItems'
import {shoppingReducer} from '../../reducer/ShoppingReducer.js'
import {shoppingInitialState} from '../../reducer/ShoppingReducer.js'
import Button from '../atoms/Button'
import Card from '../atoms/Card'
import styled from 'styled-components'
import { Modal ,ModalHeader, ModalBody, ModalFooter } from 'reactstrap'


const ShoppingCart = ({mostrarCarrito, setMostrarCarrito, contadorCarrito, setContadorCarrito}) => {
    const [state,dispatch] = useReducer (shoppingReducer, shoppingInitialState);

    const addToCart = (id) => {
      console.log(id);
      dispatch({type: TYPES.ADD_TO_CART, payload: id});
  };

  const deleteFromCart = (id, all = false) => {
    if(all){
        dispatch({type : TYPES.REMOVE_ALL_PRODUCTS, payload:id})
    } else {
        dispatch({type : TYPES.REMOVE_ONE_PRODUCT, payload:id})
    }
    
};

const clearCart = () => {
  dispatch({type: TYPES.CLEAR_CART});
};

    const {products, cart,cartPrice, cartCount} = state;

    const [modal, setModal] = useState(false);

    const toggle = () => {
      setModal(!modal);
      setMostrarCarrito(!mostrarCarrito);
    };

    const handleCheckboxChange = () => {
      setMostrarCarrito(!mostrarCarrito);
    };

setContadorCarrito(cartCount)


/////////////////////////////////////////////////////////////////////////////
    return (
    <>
         <aside className="cart "  style={{ display: mostrarCarrito? 'block' : 'none' }}>
        <Title>Carrito De Compras </Title>
       

          <CartCards>
            {cart.map((item, i) =>(
              <CartItems key={i} data={item} deleteFromCart={deleteFromCart} />
            ))}
          </CartCards>

          <CartCards>
          <Button Content = "Limpiar carrito" OnClick = {clearCart} />
          </CartCards>


          <Sub>
            <SubText><b>Total</b><br />$ {cartPrice}</SubText>
            <Button OnClick={toggle}  Content = "Ir a pagar" />

            <Modal isOpen={modal} toggle={toggle} fullscreen='md' size='=' centered={true} scrollable={true} >
                <ModalHeader toggle={toggle}>Confirmación de pago</ModalHeader>
                <ModalBody>
                 ¿Está seguro de realizar la compra?
                </ModalBody>
                <ModalFooter>
                  <Button  OnClick={toggle} Content='Pagar' /> {' '}
                    
                  <Button OnClick={toggle} Content='Volver al carrito' />

                </ModalFooter>
            </Modal>
            <Button OnClick={handleCheckboxChange} Content="Seguir comprando" />
            
          </Sub>
        </aside>


     
      
      <Product>
        {products.map((product) =>(
          <Card data={product} addToCart={addToCart} />
        ))}         
      </Product>

      <style jsx>{`
      .cart {
        display:grid;
        position: fixed;
        overflow-y:scroll;
        overflow-x:hidden;
        right:0px;
        top: 95px;
        z-index: 9999;
        font-family: 'Outfit', sans-serif;

        padding-left: 5vw;
        padding-top: 10px;
        padding-bottom: 50px;
        background-color: #f8f9fa;


        grid-template-columns: repeat(auto-fit,minmax(150px,1vh));
        grid-template-rows:repeat(auto-fit,minmax(10vh,auto));
        grid gap: 2px;
        height: 70vh;
        width: 30vw;

        @media (max-width:600px){
          grid-template-columns:minmax(150px,1vh);
          width: 80vw;
          
          overflow-y:scroll;
          overflow-x:hidden;

      }

      .cart-button {
        align-items: center;
        background: #09f;
        border-radius: 9999px;
        cursor: pointer;
        display: flex;
        height: 32px;
        justify-content: center;
        padding: 4px;
        position: absolute;
        right: 8px;
        top: 8px;
        transition: all .3s ease;
        width: 32px;
        z-index: 9999;
      }
      
      .cart-button:hover {
        scale: 1.1;
      }
      
     
      `}

      </style>
      
    </>
  );
};

export default ShoppingCart;



const Product = styled.div`

padding-left: 50px;
padding-top: 50px;
padding-bottom: 50px;
background-color: white;
display: flex;
flex-wrap:wrap;
flex-grow:1;
flex-basis: 20 rem;
font-family: 'Outfit', sans-serif;
justify-content:center;
justify-content:space-around;

`


const CartCards = styled.figure`
grid-column:1/4;
width: 25vw;

border-radius: 5px;
background-color: #f8f9fa;
border: 1px solid transparent;

color: black;
z-index: 9999;


`

const Title = styled.h4`
grid-column:1/4;
grid-row:1;
font-weight: bold;
font-family: 'Outfit', sans-serif;
`

const Sub = styled.div`
grid-template-columns: 100%;
grid-template-columns: repeat(3,1fr);

justify-self:start;


`
const SubText = styled.p`
margin-left:20px;
font-size: 1.5rem;
color: black;
z-index: 9999;
font-family: 'Outfit', sans-serif;
`