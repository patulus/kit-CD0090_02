import './App.css'
import Container from './Container.js'

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

// Container의 흔적...

export default App
