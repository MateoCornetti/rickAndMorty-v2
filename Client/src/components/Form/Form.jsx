import { useState } from "react"
import { validation } from "./Validation";
import styled from "styled-components";

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Titulo = styled.h1 `
    justify-content: center;
    align-items: center;
    height: 2em;
    width: 11.5em;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
    border-style: solid;
    border-width: 2px;
    border-top-width: 0px;
    border-color: black;
    background-color: #fff1d8;
    font-family: Schwifty;
    font-size: 3.5em;
    padding-top: 0.5em;
    margin-top: 0em;
    
`
const Carta = styled.div `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    height: 30em;
    width: 40em;
    border-radius: 2em;
    border-style: solid;
    border-width: 2px;
    border-color: black;
    background-color: #fff1d8;
    padding-top: 0em;
    padding-bottom: 1em;
`
const Email = styled.div `
    height: 5em;
    width: 25em;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.5em;
    margin-left: 0.8em;
`
const Password = styled.div `
    height: 5em;
    width: 25em;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.5em;
    
`
const Input = styled.input `
    margin-left: 1em;
    border-radius: 0.5em;
    border-width: 2px;
    border-style: solid;
    border-color: black;
    height: 2em;
    width: 15em;
    padding-left: 1em;
`

const Danger = styled.h1 `
    font-size: 12px;
    color: red;
    margin-top: 0.2em;
    border-radius: 0.3em;
    margin-left: 2em;
    margin-right: 2em;
`

const Cabecera = styled.h1 `
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.5em;
    margin-bottom: 2em;
`
const Boton = styled.button `
    height: 2em;
    width: 4.5em;
    border-radius: 0.5em;
    border-style: solid;
    border-color: black;
    background-color: greenyellow;
    color: green;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 2em;
    &:hover {
      background-color: green;
      color: greenyellow;
      cursor: pointer;
   };
`


export default function Form({login}) {
    const [userData, setUserData] = useState({
        email:'',
        password:'',
    });

    const [errors, setErrors] = useState({})

    function handleChange(event){
        setErrors(validation({...userData, 
            [event.target.name]: event.target.value}))
        setUserData({...userData, 
            [event.target.name]: event.target.value})
    }
    function handleSubmit(event){
        event.preventDefault()
        login(userData)
    }

    
  return (
    <Container>
        <Titulo>Rick and Morty App</Titulo>
        <Carta>
            <Cabecera>Por favor, inicie sesión para poder ingresar a la app</Cabecera>           
       <form onSubmit={handleSubmit}> 
            <Email>
            <label htmlFor="email">
                Email:
                <Input 
                    type="text" 
                    id="email" 
                    value={userData.email}
                    name="email"
                    onChange={handleChange}/>
            </label>
            {errors.email && (<Danger>{errors.email}</Danger>)}
            </Email>
            <Password>
            <label htmlFor="password">
                Password:
                <Input 
                    type="password" 
                    id="password" 
                    value={userData.password}
                    name="password"
                    onChange={handleChange}/>
            </label> 
            {errors.password && (<Danger>{errors.password}</Danger>)}
            </Password>

            <Boton>Submit</Boton>

       </form>
       </Carta>
    </Container>
  )
}
