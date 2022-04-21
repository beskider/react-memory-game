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

        let cards = images.map( image => {
            return {
                image: image,
                status: 'hidden'
            }
        })

        return cards
    }

    const [ firstCard, setFirstCard ] = useState(-1)
    const [ cards, setCards ] = useState(drawCards)
    const [ blockClick, setBlockClick ] = useState(false)
    const [ moves, setMoves ] = useState(0)

    const checkPair = (id) => {
        setMoves(moves + 1)
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
            }, 1000)
        }
    }

    const handleCardClick = id => {
        // there are shown cards on the board 
        if (blockClick) return
        
        // the same card was clicked twice
        if (firstCard === id) return

        if (firstCard === -1 ) {
            setFirstCard(id)
            console.log(id)
            cards[id].status = 'shown'
            setCards([...cards])
        } else {
            cards[id].status = 'shown'
            setCards([...cards])
            checkPair(id)
        }



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
            <h2>Moves: {moves}</h2>
        </div>
    )
}

export default Cards