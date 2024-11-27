import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

// 고객의 요구가 변경될 수 있으므로 최소한으로 단기간 내 변경할 수 있어야 함
const Container = (props) => {
    const [lyricsExpanded, setLyricsExpanded] = useState(false);
    const toggleLyrics = () => setLyricsExpanded(prevState => !prevState)
    
    return (
        <>
            <div className="container">
                <div className="song-rating">
                    {/* ratings가 3이면 [[undefined, undefined, undefined]] */}
                    {[...Array(props.song.rating)].map((_, index) => (
                        <FaStar key={index} />
                    ))}
                </div>
                <img src={`https://picsum.photos/600/150?random=${props.song.id}`} alt={`랜덤 이미지 ${props.song.id}`} onClick={toggleLyrics} />
                {/* <img src={`https://picsum.photos/600/150?title=${props.title}`} alt={`${props.title}`} /> */}
                <a href={`https://www.youtube.com/results?search_query=${props.song.title.replaceAll(" ", "+")}`} target="_blank" rel="noreferrer">
                    <div className="song-title">{`${props.song.title} (${props.song.singer})`}</div>
                </a>
                
            </div>
            {props.song.lyrics &&lyricsExpanded && (
                <pre className="song-lyrics" onClick={toggleLyrics}>
                    {props.song.lyrics}
                </pre>
            )}
        </>
    )
}

export default Container