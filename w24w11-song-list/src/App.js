import './App.css'

const App = () => (
  <div>
    <Header />
    <Playlist />
    <Container title="비밀번호 486" index="1" />
    <Container title="사건의 지평선" index="2" />
    <Container title="Supersonic" index="3" />
  </div>
)

const Header = () => (
    <h1>React 프로그래밍</h1>
)

const Playlist = () => {
  return (
    // 자바스크립트에 class 키워드가 있어 className을 사용함
    <div className="playlist">프로그래밍하면서 듣고 싶은 노래</div>
  )
}

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

export default App
