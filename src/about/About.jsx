import React from 'react'
import styled from 'styled-components';

const Cartita = styled.div`
  box-shadow: 0 0 1em 0 black;
  background-color: white;
  border-radius: 3em;
  border-style: solid;
  border-width: 2px;
  border-color: black;
  margin: 3.5em;
  padding: 2em;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
const Texto = styled.h1`
  color: black;
  font-size: 1em;
`

export const About = () => {
  return (
    <Cartita>
        <h1>App de Rick & Morty creada por Mateo Cornetti a modo de proyecto
            de práctica para el curso de fullstack de soyHenry
        </h1>
    </Cartita>
  )
}

export default About;
