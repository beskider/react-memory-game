import Cards from '../Cards/Cards'
import './Gameboard.css'

const Gameboard = () => {

    return (
        <div className='game'>
            <h1>Memory</h1>
            <Cards />
        </div>
    )
}

export default Gameboard