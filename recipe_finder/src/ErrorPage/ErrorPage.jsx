import { useLocation, useNavigate } from 'react-router-dom';
import './ErrorPage.css'

export default function ErrorPage() {
    // through using useLocation, we are able to navigate user to the error page
    // when we detect the url is incorrect
    const location = useLocation();
    console.error(`Error accessing route: ${location.pathname}`);

    // allow user to go back to the previous page
    const navigate = useNavigate();

    return (
        <div id="error-page" className=''>
            <div id="error-content" className='text-center'>
                <h1>Oops!</h1>
                <p>The page you are trying to access is gone...</p>
                <button className="button-74" onClick={() => {navigate(-1)}}>Click here to return to the last page</button>
            </div>
        </div>
    );
}
