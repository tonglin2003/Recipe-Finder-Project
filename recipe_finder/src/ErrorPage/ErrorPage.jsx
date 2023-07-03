import { useLocation, useNavigate, useRouteError } from 'react-router-dom';
import './ErrorPage.css'

export default function ErrorPage() {
    const error = useRouteError();
    // through using useLocation, we are able to navigate user to the error page
    // when we detect the url is incorrect
    const location = useLocation();

    // allow user to go back to the previous page
    const navigate = useNavigate();

    return (
        <div id="error-page" className=''>
            <div id="error-content" className='text-center'>
                <h1>Oops!</h1>
                <h3>An unexpected error has occurred!</h3>
                <p>{error.statusText || error.message}</p>
                <button className="button-74" onClick={() => {navigate(-1)}}>Click here to return to the last page</button>
            </div>
        </div>
    );
}
