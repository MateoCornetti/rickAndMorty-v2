import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx'
import axios from 'axios'
import GlobalFonts from './fonts/fonts.js'
import About from '../src/about/About.jsx'
import Detail from './components/Detail/Detail.jsx';
import Error404 from './components/Error404/Error404.jsx'
import Form from './components/Form/Form';
import Favorites from './components/Favorites';


function App() {
   const { pathname } = useLocation()
   const navigate = useNavigate()
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   const EMAIL = 'maildeprueba@gmail.com'
   const PASSWORD = 'Pass1234'

   function login(userData){
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true);
         navigate('/home'); 
      }
      else alert('Usuario o contraseña inválida.')
   }

   useEffect(()=>{
      !access && navigate('/')
   }, [access])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (!characters.find(char => char.id === data.id)) { 
            if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
           }
         }
         else {
            alert(`Ya esta el personaje con ese ID`)
         }
      }).catch(() => window.alert('No hay personajes con ese ID!'));
   }

   function onClose(id) {
      setCharacters(characters.filter(char => 
         char.id !== Number(id)))
   }

   return (
      
      <div className='App'>
         <style>{'body { background-color: rgb(212, 205, 191); }'}</style>
         <GlobalFonts />
         { pathname !== '/' && <Nav onSearch={onSearch}/> }   
         <Routes>
            <Route exact path= '/' element={
               <Form login={login}/>
            }/>
            <Route path='/Home' element={
               <Cards characters={characters}
                  onClose={onClose}/>
               }/>
            <Route path='/About' element={
               <About />
               }/>
            <Route path='/Detail/:id' element={
               <Detail />
            }/>
            <Route path='/Favorites' element={
               <Favorites />
            }/>
            <Route path='*' element={Error404}/>
         </Routes>      
      </div>
   );
}

export default App;