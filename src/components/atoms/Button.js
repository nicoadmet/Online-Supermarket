
import React from 'react'

const Button = (props) => {
  return (
    <>
    <button onClick = {props.OnClick}>{props.Content}</button>
    
    <style jsx>{`
    button {
        color: rgb(3, 84, 77);
        background-color:  rgba(173, 227, 115);
        padding: 10px 50px;
        border-radius: 5px;
        font-size: 1rem;
        border: 0;
        transition: 0.3s;
        margin-top: 10px;
        margin-left: 30px;
        font-weight: bold;
        font-family: 'Outfit', sans-serif;
        
    }


    button:hover {
        background-color:  rgba(173, 227, 115, 0.6);
       
    } 

    
    `}</style>
    </>
    
  )
}

export default Button