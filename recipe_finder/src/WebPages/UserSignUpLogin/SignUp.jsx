import './UserSignUpLogin.css';
import { MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Login()
{
    const navigate = useNavigate();
    return(
        <>
        <div className="d-flex" style={{height: "100vh"}}>
            <div className="loginContainer w-50">
                <form action="" className='w-50'>
                    
                    <br></br>
                <h3>Sign Up</h3>
                <div className='mb-3'>
                    <MDBInput
                        type="text"
                        label="First Name"
                        name = 'firstName'
                    />
                </div>
                <div className='mb-3'>
                    <MDBInput
                        type="text"
                        label="Last Name"
                        name = 'lastName'
                    />
                </div>
                <div className='mb-3'>
                    <MDBInput
                        type="text"
                        label="Username"
                        name = 'username'
                    />
                </div>

                <div className='mb-3'>
                    <MDBInput
                        type="password"
                        label="Password"
                        name = 'password'
                    />
                </div>
                <div>
                    Have an account?<Link to='/login'> Login in here</Link> 
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="button-74 mt-4" >
                    Sign Up
                    </button>
                </div>



                </form>
                
            </div>
            <div className='formImg w-50' style={{backgroundImage: "url('https://images.theconversation.com/files/438138/original/file-20211216-25-1hu3e65.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop')"}}>
            </div>
        </div>
        </>
    )
}