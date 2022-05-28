import { useState } from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {

    const [search, setSearch] = useState("");

    return ( 
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <input type="text" placeholder='Search Query!' onChange={(event) => setSearch(event.target.value)}/>
            <Link to={`/results/${search}`}>Results</Link>
            <Link to="/form">Form</Link>
        </nav>
     );
}
 
export default Nav;