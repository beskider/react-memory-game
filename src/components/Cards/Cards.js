import './Cards.css'
import Card from '../Card/Card'
import { useState } from 'react'

const Cards = () => {

    const drawCards = () => {

        let images = [
            '/images/firefox.png',
            '/images/github.png',
            '/images/html.png',
            '/images/js.png',
            '/images/nest.png',
            '/images/node.png',
            '/images/react.png',
            '/images/vscode.png',
        ]

        let cards = 
            [...images, ...images]
            .sort( () => Math.random() - 0.5)
            .map( image => ({
                        image: image,
                        status: 'hidden'
            }))
        
        return cards

    }

    const [ firstCard, setFirstCard ] = useState(-1)
    const [ cards, setCards ] = useState(drawCards)
    const [ blockClick, setBlockClick ] = useState(false)
    const [ moves, setMoves ] = useState(0)

    const checkPair = (id) => {
        setMoves(moves => moves + 1)
        if (cards[firstCard].image === cards[id].image) {
            cards[firstCard].status = 'passed'
            cards[id].status = 'passed'
            setCards([...cards])
            setFirstCard(-1)
        } else {
            setBlockClick(true)
            setTimeout( () => {
                cards[firstCard].status = 'hidden'
                cards[id].status = 'hidden'
                setCards([...cards])
                setBlockClick(false)
                setFirstCard(-1)
            }, 800)
        }
    }

    const handleCardClick = id => {
                
        if (sameCardClicked(id) || blockClick) return

        if (firstCard === -1 ) {
            setFirstCard(id)
            cards[id].status = 'shown'
            setCards([...cards])
        } else {
            cards[id].status = 'shown'
            setCards([...cards])
            checkPair(id)
        }
    }

    const sameCardClicked = id => {
        return firstCard === id
    }

    return (
        <div className='cards'>
            {cards.map( (card, index) => ( 
                <Card 
                    key={index}
                    id={index} 
                    {...card} 
                    handleCardClick={handleCardClick} 
                />
            ))}
            <h3>Moves: {moves}</h3>
        </div>
    )
}

export default Cards