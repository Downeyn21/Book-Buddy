import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate()

    function clickHome() {
        navigate("/")
    }

    function clickLogin() {
        navigate("/Login")
        console.log("hello Login")
    }
    function clickRegister() {
        navigate("/Register")
        console.log("Hello Register")
    }
    function clickAccount() {
        navigate("/Account")
    }
    function clickLogout() {
        localStorage.clear()
        navigate("/")
    }

    return ( 
        <div>
            <div className="navTitle">
                <h2>blabla Library</h2>
            </div>
            <div className="navBarContainer">
                <div className="navSelector" onClick={clickHome}>Home</div>
                <div className="loginContainer">
                {localStorage.getItem("token") ? 
                <>
                    <div className="loginSelector" onClick={clickAccount}>Account</div>
                    <div className="loginSelector" onClick={clickLogout}>Logout</div>
                </> :
                <>
                <div className="loginSelector" onClick={clickLogin} >Login</div>
                <div className="loginSelector" onClick={clickRegister}>Register</div>
                </>
                    }
                </div>
            </div>
        </div>
    );
}

export default NavBar;