import Card from '../Card/Card.jsx';
import style from './Cards.module.css'

const Cards = ({characters, onClose}) => { 
   return (
   <div className={style.contenedor}>
      {
      characters.map(({id, name, status, image, species, gender, origin}) => {
         return (
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
         )
      })
      }
      </div>
   )
};

export default Cards;