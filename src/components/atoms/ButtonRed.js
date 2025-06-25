
import React from 'react'

const ButtonRed = (props) => {
  return (
    <>
    <button onClick = {props.OnClick}>{props.Content}</button>
    
    <style jsx>{`
    button {
        color: rgb(3, 84, 77);
        background-color:  rgba(236, 182, 171);
      
        border-radius: 5px;
        font-size: 0.8rem;
        border: 0;
        transition: 0.3s;

        display: flex;
        align-items: center;
        justify-content: center;

        justify-self: center;
        
        
        width: 100px;
        height:20px;

        font-weight: bold;
        font-family: 'Outfit', sans-serif;
        line-height: 0.8rem;
        text-align: center;
        
    }


    button:hover {
        background-color:  rgba(236, 182, 171, 0.6);
    }

    
    `}</style>
    </>
    
  )
}

export default ButtonRed