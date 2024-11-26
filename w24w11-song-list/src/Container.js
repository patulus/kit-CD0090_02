// 고객의 요구가 변경될 수 있으므로 최소한으로 단기간 내 변경할 수 있어야 함
const Container = (props) => (
    <div className="container">
        <a href={`https://www.youtube.com/results?search_query=${props.title.replaceAll(" ", "+")}`}>
            <img src={`https://picsum.photos/600/150?random=${props.index}`} alt={`랜덤 이미지 ${props.index}`} />
            {/* <img src={`https://picsum.photos/600/150?title=${props.title}`} alt={`${props.title}`} /> */}
            <div className="song-title">{props.title}</div>
        </a>
    </div>
)

export default Container