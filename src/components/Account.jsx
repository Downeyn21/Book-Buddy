import { useEffect, useState } from "react";
import { AccountApi } from "../api";


function Account({user, setUser, token}) {
    const tkn = localStorage.getItem("token")
    
    
    

    useEffect(() => {
        async function setAccount() {
            console.log("account tkn =>", tkn)
            const result = await AccountApi(tkn)
            setUser(result)
            console.log("account user => ", user)
        }
        setAccount()
    }, [tkn])


    function clickHandle(e) {
        e.preventDefault()
        setCount(count + 1)
    }


    return (
        <div>
            <div>
                <h1>Welcome Back {user.firstname}!</h1>
            </div>
            <div>
                "map personal books here"
            </div>
        </div>
     );
}

export default Account;