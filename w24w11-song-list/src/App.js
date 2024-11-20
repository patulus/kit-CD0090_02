import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Playlist />
      <Container />
      <Container2 />
      <Container3 />
    </div>
  )
}

function Header() {
  return (
    <h1>React 프로그래밍</h1>
  )
}

function Playlist() {
  return (
    // 자바스크립트에 class 키워드가 있어 className을 사용함
    <div className="playlist">프로그래밍하면서 듣고 싶은 노래</div>
  )
}

const Container = () => (
  <div className="container">
    <a href="https://www.youtube.com/results?search_query=사랑에+연습이+있었다면">
      <img src="https://picsum.photos/600/150?random=1" alt="사랑에 연습이 있었다면" />
      <div className="song-title">사랑에 연습이 있었다면</div>
    </a>
  </div>
)

function Container2() {
  return (
    <div className="container">
      <a href="https://www.youtube.com/results?search_query=사건의+지평선">
        <img src="https://picsum.photos/600/150?random=2" alt="사건의 지평선" />
        <div className="song-title">사건의 지평선</div>
      </a>
    </div>
  )
}

function Container3() {
  return (
    <div className="container">
      <a href="https://www.youtube.com/results?search_query=사랑은+늘+도망가">
        <img src="https://picsum.photos/600/150?random=3" alt="사랑은 늘 도망가" />
        <div className="song-title">사랑은 늘 도망가</div>
      </a>
    </div>
  )
}

export default App
