import { useEffect, useState } from "react";
import { GetApi } from "../api";


function Home() {
    const [books, setBooks] = useState([])

    
    useEffect(() => {    
        async function setState() {
            let result = await GetApi()
            setBooks(result)
        }
        setState()
    },[])
    console.log("books useState =>", books)
    
    return ( 
        <div>
            <div className="titleWrapper">
                <h1>
                    Book Buddy
                </h1>
            </div>
            <div className="listContainer">
                {books.map((book) => {
                    return (
                        <div className="bookContainer" key={book.id}>
                            <div className={"imgContainer"}>
                                <img src={book.coverimage} alt={book.title} />
                            </div>
                            <div className="availableContainer">
                                {book.available ? "Available" : "Not Available"}
                            </div>
                        </div>
                    )
                })} 
            </div>
        </div>
    );
}

export default Home;