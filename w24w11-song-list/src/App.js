import './App.css'
import Container from './Container.js'

const App = () => {
  const songs = [
    "비밀번호 486",
    "사건의 지평선",
    "Supersonic",
  ]

  return (
    <div>
      <Header />
      <Playlist title="프로그래밍하면서 듣고 싶은 노래" listSong={songs} />
    </div>
  )
}

const Header = () => (
    <h1>React 프로그래밍</h1>
)

const Playlist = (props) => {
  return (
    // 자바스크립트에 class 키워드가 있어 className을 사용함
    <div className="playlist">
      <h2>{props.title}</h2>
      {
        props.listSong.map(
          (song, index) => (
            <Container key={index} title={song} index={index} />
          )
        )
      }
    </div>
  )
}

// Container의 흔적...

export default App
