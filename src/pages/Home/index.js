import { useEffect, useState} from "react"
import './style.css'
import { Link } from "react-router-dom"
import Carousel from "../../components/Carousel/carousel.js"

function Home(){
    const [images, setImages] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10")
        .then(response => response.json())
        .then(arrImages => setImages(arrImages))
    },[])

    return(
        <div className="container">
            <h1>API Teste</h1>
            <Carousel images={images}/>
            <Link className="catalogo-button" to="catalogo">
                Acessar catálogo completo
            </Link>
        </div>
    )
}

export default Home;