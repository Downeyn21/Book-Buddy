import { useEffect, useState } from "react";
import { RegisterApi } from "../api";


function Register() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confPassword, setConfPassword] = useState("")
    const [message, setMessage] = useState("test")

    useEffect(() => {
        console.log("FirstName Value =>", firstName)
    }, [firstName])
// =======================================================
    const account = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
    }
//========================================================
    function handleSubmit(e) {
        e.preventDefault()
        if (password !== confPassword) {
            setMessage("YOU IDIOT, you need to type the same password twice!!!")
        } else {
            setMessage("congrats on making a stupid fake account!!")
            RegisterApi(account)
        }
    }

//==========================================================
    return ( 
        <div className="formContainer">
            <form onSubmit={handleSubmit} className="formLogin">
                <div>
                    <label>First Name</label>
                    <input type="text" required onChange={(e) => {setFirstName(e.target.value)}}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" required onChange={(e) => {setLastName(e.target.value)}}/>
                </div>
                <div>
                    <label>Email </label>
                    <input type="email" required onChange={(e) => {setEmail(e.target.value)}}/>
                </div>
                <div>
                    <label>Password </label>
                    <input type="password" required onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" required onChange={(e) => {setConfPassword(e.target.value)}}/>
                </div>
                <div className="loginBtn">
                    <button type="submit">Create Account</button>
                    <button>Already a Member?</button>
                </div>
                <div className="formMessage">
                    {message}
                </div>
            </form>
        </div>
    );
}

export default Register;