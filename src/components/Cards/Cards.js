import './Cards.css'
import Card from '../Card/Card'
import { useState } from 'react'

import firefox from '../../assets/images/firefox.png'
import github from '../../assets/images/github.png'
import html from '../../assets/images/html.png'
import js from '../../assets/images/js.png'
import nest from '../../assets/images/nest.png'
import node from '../../assets/images/node.png'
import react from '../../assets/images/react.png'
import vscode from '../../assets/images/vscode.png'

const Cards = () => {

    const drawCards = () => {
        let images = [ firefox, github, html, js, nest, node, react, vscode ]
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
        blockCards()
        const status = cards[firstCard].image === cards[id].image ? 'passed' : 'hidden'
        setTimeout( () => {
            cards[firstCard].status = status
            cards[id].status = status
            setCards([...cards])
            setFirstCard(-1)
            unblockCards()
        }, 800)
    }

    const blockCards = () => setBlockClick(true)
    const unblockCards = () => setBlockClick(false)

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