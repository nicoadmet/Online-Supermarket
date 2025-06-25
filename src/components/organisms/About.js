import React from 'react'
import styled from 'styled-components'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const AboutUs = () => {
  return (
    <>
      <About>
        <Container>
          <Boxone>
              <Title>
                <i><h1>About Us</h1></i>
              </Title>
              <Paragraph> 
                <p>Desde el año 1982 brindándote el mejor servicio y por ustedes estamos en todo América. 
                  Hoy para tu mayor comodidad te presentamos nuestra página para facilitarte así tus compras. 
                  Lo que compres te lo enviamos a tu hogar para tu mayor comodidad y disfrute.
                  Muy amables por habernos escogido a nosotros, gracias a ti seguimos creciendo. </p>

              </Paragraph>
              <Button className={styles.button}><Link target="_blank" href= "https://campus.academianumen.com/">Leer más</Link></Button>

            </Boxone>
            <Boxtwo>
            <Image className="image" src="./images/aboutus.jpg" alt="about us"/>
            </Boxtwo>
          
        </Container>
      </About>
    </>

  )
}

export default AboutUs

const About = styled.div`
width: 100%;
min-height: auto;
background-color: white;
padding-bottom:30px;


`

const Container = styled.div`
width: 80%;
display: flex;
margin:auto;

display: grid;
grid-template-columns: repeat(
auto-fit,
minmax(150px,1fr))

`
const Boxone = styled.div`
margin-top: 50px;
width: 90%;


`
const Title = styled.div`
text-trasform: uppercase;
font-size: 28px;
margin-top: 20px;
color: black;


`
const Paragraph = styled.div`
width: 100%;
font-family:; 
font-size: 18px;
line-height: 1.5;
font-family: 'Outfit', sans-serif;
`

const Button = styled.button`
background-color: rgb(247, 148, 0);
border: 1px solid transparent;
padding: 10px 30px;
color: rgb(195, 77, 25);
font-size: 1rem;
letter-spaxing: 1.5px;
margin-top:30px;
border-radius: 5px;
font-weight: bold;
font-family: 'Outfit', sans-serif;

`
const Boxtwo = styled.div`
margin-top: 50px;
width: 90%;

`

const Image = styled.img`
width: 100%;


`





