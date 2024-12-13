import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const Game = (props) => {
    const [descriptionExpanded, setDescriptionExpanded] = useState(false);
    const toggleDescription = () => setDescriptionExpanded(prevState => !prevState)
    
    return (
        <>
            <div className="game">
                <div className="game-rating">
                    {[...Array(props.game.rating)].map((_, index) => (
                        <FaStar key={index} />
                    ))}
                </div>
                <img src={props.game.image} alt={props.game.title} onClick={toggleDescription} />
                <a href={`https://www.youtube.com/results?search_query=${props.game.title.replaceAll(" ", "+")}+공략`} target="_blank" rel="noreferrer">
                    <div className="game-title">{`${props.game.title} (${props.game.developer})`}</div>
                </a>
            </div>
            <div className={`game-description${descriptionExpanded ? ` show` : ``}`} onClick={toggleDescription}>
                <div className="game-description-body">
                    <table>
                        <tr>
                            <th>장르</th>
                            <td>{props.game.genre}</td>
                        </tr>
                        <tr>
                            <th>제목</th>
                            <td>{props.game.title}</td>
                        </tr>
                        <tr>
                            <th>개발사</th>
                            <td>{props.game.developer}</td>
                        </tr>
                        <tr>
                            <th>가격</th>
                            <td>{props.game.price}</td>
                        </tr>
                    </table>
                    <p>{props.game.description}</p>
                </div>
            </div>
        </>
    )
}

export default Game
