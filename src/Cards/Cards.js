import './Cards.css'
import Card from '../Card/Card'
import { useState } from 'react'

const Cards = () => {

    const drawCards = () => {
        
        let images = [
            '/images/firefox.png',
            '/images/firefox.png',
            '/images/github.png',
            '/images/github.png',
            '/images/html.png',
            '/images/html.png',
            '/images/js.png',
            '/images/js.png',
            '/images/nest.png',
            '/images/nest.png',
            '/images/node.png',
            '/images/node.png',
            '/images/react.png',
            '/images/react.png',
            '/images/vscode.png',
            '/images/vscode.png' 
        ].sort(() => Math.random() - 0.5)

        let cards = images.map((image, index) => {
            return {
                id: index,
                image: image,
                status: 'hidden'
            }
        })

        return cards
    }
    
    const [ cards, setCards ] = useState(drawCards)

    const handleCardClick = id => {
        let updatedCards = [ ...cards]
        updatedCards[id].status = 'passed'
        console.log(updatedCards)
        setCards(updatedCards)
    }

    return (
        <div className='cards'>
            {cards.map( card => ( 
                <Card 
                    key={card.id} 
                    {...card} 
                    handleCardClick={handleCardClick} 
                />
            ))}
        </div>
    )
}

export default Cards