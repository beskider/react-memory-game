import './Card.css'

const Card = ({id, image, status, handleCardClick}) => {

    const imageSrc = status === 'hidden' ? '/images/cardback.png' : image

    return (
        <div 
            className={`card ${status}`}
            onClick={() => handleCardClick(id)} >
                <img src={imageSrc} alt="card"/>
        </div>
    ) 
}

export default Card