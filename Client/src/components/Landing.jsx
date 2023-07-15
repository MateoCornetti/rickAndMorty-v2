import styled from "styled-components"
import { Link } from "react-router-dom";
import React from 'react'

const Cartita = styled.div `
   box-shadow: 0 0 1em 0 black;
   background-color: #ccdfba;
   border-radius: 3em;
   border-style: solid;
   border-width: 2px;
   border-color: black;
   margin: 3.5em;
   padding: 2em;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
const Titulo = styled.div `
   display: flex;
   justify-content: center;
   align-items: center;
`
const TextoA = styled.h1 `
    font-size: 3.5em;
    margin-right: 0.6em;
`
const TextoB = styled.h1 `
    font-family: Schwifty;
    font-size: 5em;
`
const Boton = styled.button `
    height: 4.2em;
    width: 4.2em;
    font-family: Schwifty;
    font-size: 3em;
    background-color: greenyellow;
    border-style: solid;
    border-width: 10px;
    border-radius: 5em;
    border-color: green;
    color: green;
    cursor: pointer;
    &:hover {
      scale: 1.2;
      color: greenyellow;
      border-color: greenyellow;
      background-color: green;
   };
`
const Creador = styled.h1 `
    display: flex;
    justify-content: left;
    padding-top: 2em;
    margin-left: 1.1em;
`

export const Landing = () => {
    return (
      <Cartita>
        <Titulo>
          <TextoA>Bienvenidos a la APP de</TextoA>
          <TextoB>Rick And Morty</TextoB>  
        </Titulo>
        <Link to= {'/Home'}>
          <Boton>ENTRAR</Boton>
        </Link>
          <Creador>Por: Mateo Cornetti</Creador>
      </Cartita>
    )
  }
  
  export default Landing;
