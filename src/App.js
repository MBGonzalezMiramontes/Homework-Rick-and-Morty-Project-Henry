import './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState } from "react";
import axios from 'axios';
import {Routes, Route, useLocation} from 'react-router-dom';
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";




function App() {

   const [characters, setCharacters] = useState([]);

   const {pathname} = useLocation();

   function onSearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`)
   .then(({ data }) => {
      const duplicateCharacters = characters.some((character) => character.id === data.id);
      if (duplicateCharacters) {
         window.alert('¡Este personaje ya está en la lista!');
         }
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
};


   const onClose = (id) => {
      setCharacters(
         characters.filter((character) => {
            return character.id !== Number(id)
         })
      )
   };


   return (
      <div className='App'>
         {pathname !== '/' && <Nav onSearch={onSearch}/>}
         <Routes>
            <Route path = '/' element = {<Form/>}/>
            <Route path = '/home'  element = {<Cards characters={characters} onClose={onClose}/>}/>
            <Route path = '/about' element = {<About/>}/>
            <Route path = '/detail/:id' element = {<Detail/>}/>

         </Routes>
      </div>
   );
}

export default App;
