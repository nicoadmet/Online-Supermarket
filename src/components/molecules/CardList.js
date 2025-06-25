
import React from 'react'
import Card from '../atoms/Card'
import styled from 'styled-components'

const Db = []

const CardsList = () => {
  return (
    <List>

      <i><h2>Ofertas de la Semana</h2></i>  
      {
        Db.map(card => <Card
          key={card.id}
          data={card}
        />)
      }
    
    </List>
  )
}



export default CardsList

const List = styled.section`

font-size: 28px;
           
justify-content:center;
justify-content:space-around;
padding-top: 40px;
background-color: white;

display: flex;
flex-wrap:wrap;
flex-grow:1;
flex-basis: 20 rem;
`
