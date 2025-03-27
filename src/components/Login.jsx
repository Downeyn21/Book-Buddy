import { useEffect, useState } from "react";
import { LoginApi } from "../api";
import { useNavigate } from "react-router-dom";

function Login({setToken, token}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const data = {
        email: email,
        password: password,
    }

    function handleSubmit(e) {
        e.preventDefault()
        setToken(LoginApi(data))
        navigate("/Account")
        console.log("bitch", token)
    }


    return ( 
        <div className="formContainer">
            <form onSubmit={handleSubmit} className="formLogin">
                <div>
                    <label>Email </label>
                    <input type="email" required onChange={(e) => {setEmail(e.target.value)}} />
                </div>
                <div>
                    <label>Password </label>
                    <input type="password" required onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
                <div className="loginBtn" >
                    <button type="submit">Login</button>
                    <button>Not a Member?</button>
                    <button>Forgot Password?</button>
                </div>
            </form>
        </div>
     );
}

export default Login;