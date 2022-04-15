import './Card.css'

const Card = ({id, image, status, handleClick}) => {
    return (
        <div 
            className={`card ${status}`}
            onClick={() => handleClick(id)} 
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