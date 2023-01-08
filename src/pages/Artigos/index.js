import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./style.css"

function Artigos(){
    const {id} = useParams()
    
    const [image, setImage] = useState('')
    const [post, setPost] = useState({})
   
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(resp => resp.json())
        .then(img => setImage(img.url))
    }, [id])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(posts =>{
            console.log(posts) 
            setPost(posts)
        })
    }, [id])

    return(
        <div className="container">
            <img className="img-post" src={image} alt={post.title}/>
            <h1 className="article-title"> {post.title} </h1>
            <article>
                <p> {post.body} {post.body}</p>
                <p> {post.body} {post.body}</p>
                <p> {post.body} {post.body}</p>
            </article>

        </div>
    )
}

export default Artigos