import styled from "styled-components";
import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Cartita = styled.div `
    height: 23em;
    width: 40em;
    display: flex;
    box-shadow: 0 0 1em 0 black;
    background-color: white;
    margin-left: 8em;
    margin-right: 30em;
    margin-top: 2em;
    border-radius: 2em;
    border-style: solid;
    border-width: 2px;
    border-color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 2em;
`
const DivA = styled.div `
    display: flex;
    flex-direction: column; 
    margin: 2em;
    margin-right: 4em;
`
const DivB = styled.div `
    display: flex;
    flex-direction: column;
    margin: 2em;
    margin-top: 3em;
`
const Img = styled.img `
    box-shadow: 0 0 1em 0 black;
    width: 16em;
    height: 16em;
    border-radius: 1em;
    border-style: solid;
    border-width: 2px;
    border-color: black;
`
const ID = styled.h1 `
    padding-top: 0.3em;
    box-shadow: 0 0 0.2em 0 black;
    font-size: 1em;
    width: 4em;
    height: 1.5em;
    border-radius: 1em;
    border-style: solid;
    border-width: 2px;
    border-color: black;
`

export const Detail = () => {
  const { id } = useParams()
  const [charDetail, setCharDetail] = useState({})

  useEffect(()=> {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({data}) => {
      if(data.name) {
        setCharDetail(data);
      } else {
        window.alert('No hay personajes con ese ID')
      }
    })
    return setCharDetail({})
  }, [id])

  return (

    <Cartita>
      <DivA>
        <Img src={charDetail.image}/>
        <h2>{charDetail.name}</h2>
      </DivA>
      <ID>{charDetail.id}</ID>
      <DivB>
        <h4>Specie: {charDetail.species}</h4>
        <h4>Gender: {charDetail.gender}</h4>
        <h4>Status: {charDetail.status}</h4>
        <h4>Origin: {charDetail.origin?.name}</h4>
      </DivB>
    </Cartita>

  )
}

export default Detail;
