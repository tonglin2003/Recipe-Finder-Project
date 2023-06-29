import './UserSignUpLogin.css';
import { MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";


export default function Login()
{
    const navigate = useNavigate();
    return(
        <>
        <div className="d-flex" style={{height: "100vh"}}>
        <h3 style={{fontWeight: "bold", position:"absolute", left:"0"}} onClick={()=> navigate('/')}>Pawter</h3>

            <div className="loginContainer w-50">
                <form action="" className='w-50'>
                    
                    <br></br>
                <h3>Welcome Back</h3>
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
                <div className="d-flex justify-content-center">
                    <button type="submit" className="button-74" >
                    Submit
                    </button>
                </div>

                </form>
                
            </div>
            <div className='formImg w-50'>
            </div>
        </div>
        </>
    )
}