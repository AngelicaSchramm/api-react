import { Link } from "react-router-dom"
import { useRef } from "react"
import './carousel.css'


function Carousel({images}){

    const carousel = useRef(null)
    const card = useRef(null)

    const handleClickLeft = e => {
        e.preventDefault()
        carousel.current.scrollLeft -= card.current.offsetWidth + 10
    }

    const handleClickRigth = e => {
        e.preventDefault()
        carousel.current.scrollLeft += card.current.offsetWidth + 10
     }

    return(
        
        <div className="carousel">
            <button className="left" onClick={handleClickLeft}>
                <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <div className="carousel-cards" ref={carousel}>
                {images.map(image => {
                    return(
                        <Link ref={card} to={`artigos/${image.id}`} key={image.id} className="card">
                            <img src={image.thumbnailUrl} alt={image.title}/>
                            <div className="title">{image.title}</div>
                        </Link>
                    )
                })}
            </div>
            <button className="rigth" onClick={handleClickRigth}>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
        </div>
    )
}

export default Carousel