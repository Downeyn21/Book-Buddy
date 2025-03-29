import { useEffect, useState } from "react";
import { GetApi } from "../api";
import { useNavigate } from "react-router-dom";


function Home() {
    const [books, setBooks] = useState([])
    const navigate = useNavigate()
    const [willFilter, setWillFilter] = useState(false)
    const [willSort, setWillsort] = useState(false)

    useEffect(() => {    
        async function setState() {
            const result = await GetApi()
            setBooks(result)
        }
        setState()
    },[])
    
    const FilteredBooks =  willFilter ? 
        books.filter((book) => book.available === true)
        : books
    
    const SortedBooks = willSort ?
        [...FilteredBooks].sort((a,b) => a.title.localeCompare(b.title))
        : [...FilteredBooks]

    return ( 
        <div>
            <div className="titleWrapper">
                <button className={willFilter ? 
                "filterBtnT" : "filterBtnF"
                } onClick={() => {setWillFilter(!willFilter)}}>Filter Avaliable</button>
                <h1>
                    Book Buddy
                </h1>
                <button className={willSort ?
                "sortBtnT" : "sortBtnF"} onClick={() => {setWillsort(!willSort)}}>Sort A-Z</button>
            </div>
            <div className="listContainer">
                {SortedBooks.map((book) => {
                    return (
                        <div className="bookContainer" key={book.id} onClick={() => {navigate(`SingleBooks/${book.id}`)}}>
                            <div className={"imgContainer"} >
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