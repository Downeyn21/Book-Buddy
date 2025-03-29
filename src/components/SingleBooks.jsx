import { useEffect, useState } from "react";
import { SingleBook } from "../api";
import { useParams } from "react-router-dom";
import { TakeBook } from "../api";

function SingleBooks() {
    const [book, setBook] = useState([])
    const {bookId} = useParams()

    useEffect(() => {
        async function setSingleBook() {
            const result = await SingleBook(bookId)
            setBook(result)
        }
        setSingleBook()
    }, [])

    
    async function clickHandle() {
        const tkn = localStorage.getItem("token")
        
        const result = await TakeBook(tkn, bookId)
        console.log("take book => ", result)
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
                <div>
                    {book.available ? (
                    <button onClick={() => {clickHandle()}} >take this bad boy?</button>):(
                        <span>look like some idiot took this one</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SingleBooks;