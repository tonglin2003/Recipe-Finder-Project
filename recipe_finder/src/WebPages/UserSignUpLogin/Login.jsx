import './UserSignUpLogin.css';
import { MDBInput } from 'mdb-react-ui-kit';
import { useNavigate, Link, Form } from "react-router-dom";

export default function Login()
{
    const navigate = useNavigate();
    return(
        <>
        <div className="d-flex" style={{height: "100vh"}}>
            <div className="loginContainer w-50" >
                <Form method="post" className='w-50'>
                    
                    <br></br>
                <h3>Welcome Back</h3>
                <div className='mb-3'>
                    <MDBInput
                        type="text"
                        label="Email"
                        name = 'email'
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
                    No account?<Link to='/signup'> Sign up here</Link> 
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="button-74 mt-4" >
                    Login
                    </button>
                </div>



                </Form>
                
            </div>
            <div className='formImg w-50' style={{backgroundImage: "url('https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80')"}}>
            </div>
        </div>
        </>
    )
}