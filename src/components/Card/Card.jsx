import style from './Card.module.css';
import { Link } from 'react-router-dom';


export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={style.contenedor}> 
        <button onClick={() => {onClose(id)}}>X</button>
        <Link to={`/detail/${id}`}>
         <h2 className="card-name"> {name} </h2>
         </Link>
         <h2>Status: {status} </h2>
         <h2>Especie: {species} </h2>
         <h2>Género: {gender} </h2>
         <h2>Origen: {origin.name} </h2>
         <img src={image} alt='' />
      </div>
   );
}