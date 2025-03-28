import { useEffect, useState } from "react";
import { AccountApi } from "../api";
import { ResBooksApi } from "../api";


function Account({user, setUser, token}) {
    const tkn = localStorage.getItem("token")
    const [resBooks, setResBooks] = useState([])
    
    

    useEffect(() => {
        async function setAccount() {
            const result = await AccountApi(tkn)
            setUser(result)
        }
        setAccount()
    }, [])

    useEffect(() => {
        async function setResBooks() {
            const result = await ResBooksApi(tkn)
            setResBooks(result)
        }
    })


    return ( user ? (
            <div>
                <div className="accountContainer">
                    <div>
                        <h1>Welcome Back {user.firstname}!</h1>
                    </div>
                    <div>
                        <h3>account info</h3>
                        <div>
                            Name: {user.firstname} {user.lastname}
                        </div>
                        <div>
                            Email: {user.email}
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>your reserved books</h3>
                    </div>
                    <div>{resBooks.length === 0 ? "go reserve some books loser" : 
                        resBooks.map((book) => {
                            return (
                                <div>{book.title}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        ):(
            <div>shhh just wait a sec ;)</div>
        )
     );
}

export default Account;