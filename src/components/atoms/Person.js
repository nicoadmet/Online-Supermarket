import React from 'react'
import styled from 'styled-components'

export const Person = () => {
  return (
    <><Persons>
        <div className="reviews">
          <div className="reviews-slide">
            <div className="review-person">
              <img src="https://cdn-icons-png.flaticon.com/512/3532/3532704.png" className="Ana"/>
              <h3 className="name">Ana Iriarte</h3>
            </div>
            <hr  style={{
                color: '#ffffff',
                backgroundColor: '#ffffff',
                height: 3,
                borderColor : '#ffffff'
            }}/>
            <div className="review-info">
              <h4 className="titulo-review">Excelente servicio</h4>
              
                <Image src="https://i.pinimg.com/564x/37/3b/8c/373b8c3fff1721eca5b8276a53c71b67.jpg"/>
              
              <p className="descripcion-review">
                Superó mis expectativas, los productos son frescos,
                grandes y convenientes para el bolsillo. 
                Freshness es definitivamente una buena opción</p>
            </div>
          </div>

          <div className="reviews-slide">
            <div className="review-person">
              <img src="https://cdn-icons-png.flaticon.com/512/2922/2922716.png" className="Leo"/>
              <h3 className="name">Leo Garcia</h3>
            </div>
            <hr  style={{
                color: '#ffffff',
                backgroundColor: '#ffffff',
                height: 3,
                borderColor : '#ffffff'
            }}/>
            <div className="review-info">
              <h4 className="titulo-review">Excelente servicio</h4>
              <div className="stars">
                <Image src="https://i.pinimg.com/564x/37/3b/8c/373b8c3fff1721eca5b8276a53c71b67.jpg"/>
              </div>
              <p className="descripcion-review">
                Increible e Impecable la atención este supermecado.
                Sus productos son excelentes, me encanta.
                ¡Siempre que puedo los recomiendo!</p>
            </div>
          </div>

          <div className="reviews-slide">
            <div className="review-person">
              <img src="https://cdn-icons-png.flaticon.com/512/2922/2922644.png" className="Lucia"/>
              <h3 className="name">Lucia Alvarez</h3>
            </div>
            <hr  style={{
                color: '#ffffff',
                backgroundColor: '#ffffff',
                height: 3,
                borderColor : '#ffffff'
            }}/>
            <div className="review-info">
              <h4 className="titulo-review">Excelente servicio</h4>
              <div className="stars">
                <Image src="https://i.pinimg.com/564x/37/3b/8c/373b8c3fff1721eca5b8276a53c71b67.jpg"/>
              </div>
              <p className="descripcion-review">
              Me encantó comprar aquí, variedad de productos, a buen precio, envio rápido, 
              ordenado y expedito !! Lo recomiendo totalmente</p>
            </div>
          </div>

          <div className="reviews-slide">
            <div className="review-person">
              <img src="https://cdn-icons-png.flaticon.com/512/2922/2922627.png" className="Angel"/>
              <h3 className="name">Miguel Angel</h3>
            </div>
            <hr  style={{
                color: '#ffffff',
                backgroundColor: '#ffffff',
                height: 3,
                borderColor : '#ffffff'
            }}/>
            <div className="review-info">
              <h4 className="titulo-review">Excelente servicio</h4>
              <div className="stars">
                <Image src="https://i.pinimg.com/564x/37/3b/8c/373b8c3fff1721eca5b8276a53c71b67.jpg"/>
              </div>
              <p className="descripcion-review">
              Realmente 100% recomendado. Los productos son frescos y
              bien conservados. Una belleza de lugar. Además, sus entregas son rápidas</p>
            </div>
          </div>

        </div> 
        <styles/>

      </Persons>
      </>
  )
}


const Persons = styled.figure`
margin-top: 25px;
color: black;
font-size: 14px;
font-family: "Outfit",sans-serif;
`
const Image = styled.img`
width: 95px;
height: 30px;
object-fit: cover;
  
`