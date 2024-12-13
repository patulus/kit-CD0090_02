import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Container from './Container.js'

const SERVER_URL = 'http://localhost:8080/api/songs'

const App = () => {
  const [songs, setSongs] = useState([])
  const getSong = async () => {
    try {
      const res = await axios.get(SERVER_URL)
      console.log(res)
    } catch (err) {
      console.log(err)
      setSongs([])
    }
  }
  useEffect(() => {
    getSong()
  }, [])

  return (
    <>
      <Header />
      <Playlist title="프로그래밍하면서 듣고 싶은 노래" listSong={songs} />
    </>
  )
}

const Header = () => (
    <h1>React 프로그래밍</h1>
)

const Playlist = ({title, listSong}) => {
  return (
    // 자바스크립트에 class 키워드가 있어 className을 사용함
    <div className="playlist">
      <h2>{title}</h2>
      {
        listSong.map(song => (
            <Container song={song} />
          )
        )
      }
    </div>
  )
}

// Container의 흔적...

export default App
