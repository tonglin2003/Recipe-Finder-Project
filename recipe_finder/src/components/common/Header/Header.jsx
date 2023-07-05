import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

export default function Header()
{
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" id="headerNavBar">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/home"}>Pawter</Link>
                <SearchBar/>
                <button className="navbar-toggler" 
                type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarNavDropdown" 
                aria-controls="navbarNavDropdown" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={"/user/post"}>My Account</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/breedpedia">Breedpedia</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="#">Pet Recipes</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="#">Adoption</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <br></br>
        <br></br>
        <div>
            <Outlet/>
        </div>

        <div>
            <Footer/>
        </div>
        
        </>
    );
}