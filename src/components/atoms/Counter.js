import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'


const initialState = 0;

const Counter = () => {

const [contador, setContador] = useState(initialState)

const agregar = () => setContador(contador + 1)
 
const resetear = () => setContador(initialState)

const eliminar = () => setContador(contador -1)

return (
    <>
    <Count>
        <div>
            <button onClick={agregar}>Agregar</button>
            <button onClick={resetear}>Resetear</button>
            <button onClick={eliminar}>Eliminar</button>
        </div>
        <Quantity>{contador}</Quantity>
        
    </Count>
    </>
  )
}

export default Counter



const Count = styled.div`
display: flex;
flex-direcion: column;
justify-content: space around;
justify-content: flex-end

`

const Quantity = styled.p`
background-color: rgb(231, 83, 83);
font-size: 1rem;
color: white;
border-radius: 20px;
font-family: "Outfit",sans-serif;
font-weight: bold;
width: 20px;
display: grid;
place-items: center;

`