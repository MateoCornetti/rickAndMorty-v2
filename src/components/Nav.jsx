import styled from "styled-components"
import SearchBar from "./SearchBar.jsx"
import React from "react"
import { Link } from "react-router-dom"
import NavLink from './NavLink/NavLink.jsx'

const Fondo = styled.div `
   box-shadow: 0 0 0.5em 0 black; 
   display: flex;
   justify-content: space-between;
   background-color: #e8d2aa;
   border-style: solid;
   border-width: 2px;
   border-top-width: 0em;
   border-color: #000000;
   padding-top: 0em;
   padding-right: 0.5em;
   padding-bottom: 1em;
   border-bottom-left-radius: 3em;
   border-bottom-right-radius: 3em;
   margin-left: 3.5em;
   margin-right: 3.5em;
`;


const Cabecera = styled.div `
   justify-content: start;
   padding-left: 4em;
   padding-top: 1em;
`

const Titulo = styled.div `
   color: black;
   font-family: Schwifty;
   font-size: 4em;
`

const Space = styled.h1 `
   width: 22em;
`

const Botones = styled.button `
   margin-top: 3em;
   margin-right: 0.5em;
   border-style: solid;
   border-color: #000000;
   background-color: #e8d2aa;
   color: black;
   height: 3.2em;
   padding: 0.5em;
   border-radius: 3em;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   font-size: 1em;
   cursor: pointer;
   &:hover {
      background-color: white;
   };
`


class Nav extends React.Component {
    constructor(props){
        super()
    }

    render(){
        return <nav>
        <Fondo>
            <Cabecera>
                <Titulo>Rick And Morty App</Titulo> 
            </Cabecera> 
            <Space>
            </Space>
        <NavLink to= {'/Home'}><Botones>Home</Botones></NavLink>
        <NavLink to= {'/Favorites'}><Botones>Favorites</Botones></NavLink>
        <NavLink to= {'/About'}><Botones>About</Botones></NavLink>
        <SearchBar onSearch={this.props.onSearch}/>
        </Fondo>
    </nav>        
    }
}

export default Nav;