function Register() {

    function handleSubmit() {
        
    }


    return ( 
        <div className="formContainer">
            <form onSubmit={handleSubmit} className="formLogin">
                <div>
                    <label>Email </label>
                    <input type="email" />
                </div>
                <div>
                    <label>Password </label>
                    <input type="password" />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" />
                </div>
                <div className="loginBtn" >
                    <button type="submit">Create Account</button>
                    <button>Already a Member?</button>
                </div>
            </form>
        </div>
     );
}

export default Register;