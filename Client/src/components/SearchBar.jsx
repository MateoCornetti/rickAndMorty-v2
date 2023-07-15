import styled from "styled-components"
import { useState } from "react";



const Busqueda = styled.input `
   border-style: solid;
   border-color: #000000;
   height: 4em;
   border-radius: 3em;
   margin-right: 1em;
   padding-left: 2em;
   padding-right: 2em;
   &:hover {
      background-color: #fff1d8;
   };
`;
const Agregar = styled.button `
   border-style: solid;
   border-color: #000000;
   background-color: grey;
   height: 3.2em;
   padding: 0.5em;
   margin-right: 1em;
   border-radius: 3em;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   font-size: 1em;
   cursor: pointer;
   color: white;
   &:hover {
      background-color: #e8e1d8;
      color: grey;
   };
`
const Aleatorio = styled.button `
   border-style: solid;
   border-color: #000000;
   background-color: #94c46c;
   height: 3.2em;
   padding: 0.5em;
   margin-right: 1.5em;
   border-radius: 3em;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   font-size: 1em;
   cursor: pointer;
   color: #4a801d;
   &:hover {
      background-color: #c0daba;
      color: #548737;
   };
`

const Texto = styled.h1 `
   color: #954444;
   font-size: 0.9em;
   margin-right: 15em;
`


const randomNum = () => {
   var result = Math.floor(Math.random()*826);
   return result;
}

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   function handleChange(event){
      setId(event.target.value);
   }


   return (
      <div>    
         <Texto>Pista: hay 826 personajes!</Texto>
         <Busqueda type='search' onChange={handleChange}/>
         <Agregar onClick={()=> onSearch(id)}>Agregar</Agregar> 
         <Aleatorio onClick={()=> onSearch(randomNum())}>Aleatorio</Aleatorio>
      </div>  
   );
}
