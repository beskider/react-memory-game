import './Card.css'

const Card = ({id, image, status, handleCardClick}) => {
    return (
        <div 
            className={`card ${status}`}
            onClick={() => handleCardClick(id)} 
        >
            <img 
                src={ status === 'hidden' ? '/images/cardback.png' : image } 
                alt="card" 
            />
        </div>
    ) 
}

export default Card