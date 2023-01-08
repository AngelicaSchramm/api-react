
import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import "./style.css"

function Catalogo(){

    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(0)

    const postsPerPage = 15
    const pages = Math.ceil(posts.length / postsPerPage)
    const startIndex = currentPage * postsPerPage
    const endIndex = startIndex + postsPerPage
    const currentPosts = posts.slice(startIndex, endIndex)



    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=150")
        .then(response => response.json())
        .then(postsJson => setPosts(postsJson))
    }, [])


    return(
        <div className="container">
            <h1>Catálogo de publicações</h1>

            <ul className="postList">   
            {currentPosts.map(post => {
                return (
                        <li className="post" key={post.id}>
                            <Link to={`../artigos/${post.id}`}>
                            <img src={post.thumbnailUrl} alt={post.title}/>
                            <div className="title">{post.title}</div>
                            </Link>
                        </li>
                )
            })}
            </ul> 

            <div className="pagination">
                <button onClick={() => (currentPage - 1) < 0 ? setCurrentPage(currentPage) : setCurrentPage(currentPage - 1)}>Anterior</button>
                {Array.from(Array(pages), (post, index) => {
                    return <button onClick={() => setCurrentPage(index)}>{index + 1}</button>
                })}
                <button onClick={() => (currentPage + 1) > 9 ? setCurrentPage(currentPage) : setCurrentPage(currentPage + 1)}>Próximo</button>
            </div>
            
        </div>
    )
}

export default Catalogo