import SearchBar from '../SearchBar/SearchBar.jsx'
import style from './Nav.module.css'
import {Link} from 'react-router-dom';

function Nav ({onSearch}){
 
    return(
        <div className={style.container}>
            <SearchBar onSearch={onSearch} />
        
            <Link to = '/home'>
            <buttom>Home</buttom>
            </Link>

            <Link to = '/about'>
            <buttom>About</buttom>
            </Link>

        
        </div>
    )
};

export default Nav;