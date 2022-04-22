import './Card.css'
import cardback from '../../assets/images/cardback.png';

const Card = ({id, image, status, handleCardClick}) => {

    const imageSrc = status === 'hidden' ? cardback : image

    return (
        <div 
            className={`card ${status}`}
            onClick={() => handleCardClick(id)} >
                <img src={imageSrc} alt="card"/>
        </div>
    ) 
}

export default Card