import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from "react";

const Detail = () => {

   const {id} = useParams ();

   const [character, setCharacter] = useState({});
   
   useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div>
         <img src={character.image && character.image} alt='' />
         <h1> {character.name && character.name} </h1>
         <h2>Status: {character.status && character.status} </h2>
         <h2>Especie: {character.species && character.species} </h2>
         <h2>Género: {character.gender && character.gender} </h2>
         <h2>Origen: {character.origin?.name && character.origin?.name} </h2>
         <Link to ='/home'>
         <button>Home</button>
         </Link>
         
        </div>
    )
}

export default Detail;