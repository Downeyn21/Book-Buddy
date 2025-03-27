function Login() {

    function handleSubmit(params) {
        
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
                <div className="loginBtn" >
                    <button type="submit"> Login</button>
                    <button>Not a Member?</button>
                    <button>Forgot Password?</button>
                </div>
            </form>
        </div>
     );
}

export default Login;