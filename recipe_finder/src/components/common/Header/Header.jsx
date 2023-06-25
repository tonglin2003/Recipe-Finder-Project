import './Header.css';
import SearchBar from '../SearchBar/SearchBar';

export default function Header()
{
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top" id="headerNavBar">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Pawter</a>
                <SearchBar/>
                <button class="navbar-toggler" 
                type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarNavDropdown" 
                aria-controls="navbarNavDropdown" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                >
                <span class="navbar-toggler-icon"></span>
                </button>
                

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Community</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Treat Recipes</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Adoption</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Sign In</a>
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