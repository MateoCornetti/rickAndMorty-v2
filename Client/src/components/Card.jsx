import styled from "styled-components"
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const Carta = styled.div `
   box-shadow: 0 0 1em 0 black;
   background-color: white;
   color: black;
   font-size: 0.7em;
   border-radius: 2em;
   border-style: solid;
   border-width: 2px;
   border-color: black;
   height: 34em;
   width: 26.8em;
   margin: 3em;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   transition: 0.3s ease;
   &:hover {
      scale: 1.1;
   };
`;

const ID = styled.h1 `
   position: absolute;
   margin-left: 0.5em;
   margin-top: 0.5em;
   padding: 5px;
   background-color: white;
   border-color: black;
   border-radius: 2em;
   border-width: 2px;
   border-style: solid;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   font-size: 2.5em;
   color: black;
   z-index: 2;
`
const Nombre = styled.h2 `
   position: absolute;
   top: 75%;
   left: 0%;
   font-size: 2.5em;
   z-index: 2;
   color: black;
   padding: 0.3em;
   margin-left: 1em;
   margin-right: 1em;
   background-color: white;
   border-top-right-radius: 0.5em;
   border-top-left-radius: 0.5em;
   transition: 0.2s ease;
   &:hover {
      top:73%;
   };
`;
const Boton = styled.button `
   
   position: absolute;
   top: 3%;
   right: 3%;
   margin-left: 11em;
   background-color: white;
   border-color: black;
   border-radius: 0.7em;
   border-width: 2px;
   border-style: solid;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   font-size: 2em;
   color: black;
   cursor: pointer;
   z-index: 2;
   &:hover {
      background-color: red;
      box-shadow: 0 0 0.5em 0 red;
      color: white;
   }
`;

const Boton2 = styled.button `
   
   position: absolute;
   top: 3%;
   right: 15%;
   margin-left: 11em;
   background-color: white;
   border-color: black;
   border-radius: 0.7em;
   border-width: 2px;
   border-style: solid;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   font-size: 1.7em;
   color: black;
   cursor: pointer;
   z-index: 2;
   &:hover {
      background-color: red;
      box-shadow: 0 0 0.5em 0 red;
      color: white;
   }
`;

const Imagen = styled.img `
   border-top-left-radius: 2em;
   border-top-right-radius: 2em;
   top: 100%;
   z-index: 1;
   padding-bottom: 2em;
`;

// const Info = styled.div `
//    display: flex;
//    font-size: 1em;
//    justify-content: space-around;
// `;

const IBN = styled.div `
   display: inline-block;
   position: relative;
   padding: -3em;
`

function Card({onClose, name, status, species, gender, id, image, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((charFav) => {
         if(charFav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   function handleFavorite(){
      if(isFav == true) {
         setIsFav(false)
         removeFav(id)
      }
      else {
         setIsFav(true)
         addFav({name, status, species, gender, id, image})
      }
   }

   return (
      <div className={styled.container}> 
     <Carta>
         <IBN>
           <ID>{id}</ID>
           <Boton onClick={()=> onClose(id)}>X</Boton>
           {
   isFav ? (
      <Boton2 onClick={handleFavorite}>❤️</Boton2>
   ) : (
      <Boton2 onClick={handleFavorite}>🤍</Boton2>
   )
}
           <Imagen src={image} alt={name}/>
           <Link to={`/Detail/${id}`}>
               <Nombre>{name}</Nombre>
            </Link>
         </IBN>
         
         
     </Carta>
     </div>

   );
}

export function mapDispatchToProps(dispatch){
   return {
      addFav: function(character){
         dispatch(addFav(character))
      },
      removeFav: function(id){
         dispatch(removeFav(id))
      }
   }
}

export function mapStateToProps(state){
   return {
      myFavorites:state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);