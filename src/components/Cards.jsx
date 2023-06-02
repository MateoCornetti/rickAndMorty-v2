import Card from './Card';
import styled from "styled-components"

const Container = styled.div `
   display: flex;
   margin: 1em;
   margin-top: 3.5em;
   justify-content: flex-start;
   flex-wrap: wrap;
`;


export default function Cards({ characters, onClose }) {
   return (
   <Container>
      {characters.map(
         ({ id, name, status, species, gender, image, origin}) =>(
      <Card
         key={id}
         id={id}
         name={name}
         status={status}
         species={species}
         gender={gender}
         origin={origin}
         image={image}
         onClose={onClose}
      />
   ))}
   </Container>
   )
}
