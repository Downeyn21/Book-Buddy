import { useNavigate } from "react-router-dom";

function NavBar() {

function clickHome() {
    useNavigate("/")
}




    return ( 
        <div>
            <div className="navTitle">
                <h2>blabla Library</h2>
            </div>
            <div className="navBarContainer">
                <div className="navSelector" onClick={clickHome}>Home</div>
                <div className="loginContainer">
                    <div className="loginSelector" >Login</div>
                    <div className="loginSelector" >Register</div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;