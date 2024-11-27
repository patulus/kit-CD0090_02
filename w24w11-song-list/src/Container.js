// 고객의 요구가 변경될 수 있으므로 최소한으로 단기간 내 변경할 수 있어야 함
const Container = (props) => (
    <>
        <div className="container">
            <a href={`https://www.youtube.com/results?search_query=${props.song.title.replaceAll(" ", "+")}`} target="_blank" rel="noreferrer">
                <img src={`https://picsum.photos/600/150?random=${props.song.id}`} alt={`랜덤 이미지 ${props.song.id}`} />
                {/* <img src={`https://picsum.photos/600/150?title=${props.title}`} alt={`${props.title}`} /> */}
                <div className="song-title">{`${props.song.title} (${props.song.singer})`}</div>
            </a>
        </div>
        {props.song.lyrics && (
            <pre className="song-lyrics">
                {props.song.lyrics}
            </pre>
        )}
    </>
)

export default Container