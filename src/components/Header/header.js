import { Link } from "react-router-dom";
import './header.css'


function Header(){
    return(
        <header>
            <nav>
                <Link className="logo" to="/">HOME</Link>
                <Link to="/catalago">Catálago</Link>
            </nav>
        </header>
    )
}

export default Header