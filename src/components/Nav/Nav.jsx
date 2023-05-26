import SearchBar from '../SearchBar/SearchBar.jsx'
import style from './Nav.module.css'
import {Link} from 'react-router-dom';

function Nav ({onSearch}){
 
    return(
        <div className={style.container}>
            <SearchBar onSearch={onSearch} />
        
            <Link to = '/home'>
            <button>Home</button>
            </Link>

            <Link to = '/about'>
            <button>About</button>
            </Link>

        
        </div>
    )
};

export default Nav;