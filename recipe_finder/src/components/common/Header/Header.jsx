import './Header.css';
import SearchBar from '../SearchBar/SearchBar';

export default function Header()
{
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" id="headerNavBar">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Pawter</a>
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
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/user/recipe">My Account</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/breedpedia">Breedpedia</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Pet Recipes</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Adoption</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <br></br>
        <br></br>
        
        </>
    );
}