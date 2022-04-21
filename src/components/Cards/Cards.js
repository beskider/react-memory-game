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

    const [ firstCard, setFirstCard ] = useState(-1)
    const [ cards, setCards ] = useState(drawCards)

    const checkPair = (id) => {
        if (cards[firstCard].image === cards[id].image) {
            cards[firstCard].status = 'passed'
            cards[id].status = 'passed'
            setCards([...cards])
            setFirstCard(-1)
        } else {
            setTimeout( () => {
                cards[firstCard].status = 'hidden'
                cards[id].status = 'hidden'
                setCards([...cards])
                setFirstCard(-1)
            }, 1000)
        }
    }

    const handleCardClick = id => {

        if (firstCard === -1 ) {
            setFirstCard(id)
            cards[id].status = 'shown'
            setCards([...cards])
        } 

        if (firstCard >= 0) {
            cards[id].status = 'shown'
            setCards([...cards])
            checkPair(id)
        }



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