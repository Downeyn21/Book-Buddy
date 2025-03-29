import { useEffect, useState } from "react";
import { SingleBook } from "../api";
import { useParams } from "react-router-dom";
import { TakeBook } from "../api";

function SingleBooks() {
    const [book, setBook] = useState([])
    const {bookId} = useParams()
    const tkn = localStorage.getItem("token")
    const [bookTaken, setBookTeken] = useState(false)
    
    useEffect(() => {
        async function setSingleBook() {
            const result = await SingleBook(bookId)
            setBook(result)
        }
        setSingleBook()
    }, [])

    
    async function clickHandle() {
        setBookTeken(true)
        const result = await TakeBook(tkn, bookId)

    }



    return ( 
        <div className="singleBookWrapper">
            <div className="singleImgContainer">
                <img src={book.coverimage} alt="you haven't unlocked this cover art yet" />
            </div>
            <div className="detailContainer">
                <h3>
                    {book.title}
                </h3>
                <div>
                    Author :{book.author}
                </div>
                <div>
                    {book.description}
                </div>
                <div>{tkn ? 
                <div>{bookTaken ? 
                    <div>Thank you for selecting this book, if you would like to view it please click on your account </div> : 
                    <div>
                        {book.available ? (
                        <button onClick={() => {clickHandle()}} >take this bad boy?</button>):(
                            <span>Book Not Available</span>
                        )}
                    </div>

                    }
                
                </div>
                : <div>please login to checkout this book</div>}
                </div>
            </div>
        </div>
    );
}

export default SingleBooks;