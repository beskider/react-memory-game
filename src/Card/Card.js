import './Card.css'

const Card = ({id, image, status}) => {
    return (
        <div className={`card ${status}`}>
            <img src={image} alt="card" />
        </div>
    )
}

export default Card