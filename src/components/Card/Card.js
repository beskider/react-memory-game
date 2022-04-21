import './Card.css'

const Card = ({id, image, status, handleCardClick}) => {
    return (
        <div 
            className={`card ${status}`}
            onClick={() => handleCardClick(id)} 
        >
            { status === 'hidden' ? (
                    <img src='/images/cardback.png' alt="cardback" />
                ):(
                    <img src={image} alt="card" />
                )
            }
        </div>
    ) 

}

export default Card