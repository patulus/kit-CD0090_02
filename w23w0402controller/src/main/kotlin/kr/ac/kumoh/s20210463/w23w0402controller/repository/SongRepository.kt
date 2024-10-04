package kr.ac.kumoh.s20210463.w23w0402controller.repository

import kr.ac.kumoh.s20210463.w23w0402controller.model.Song
import org.springframework.stereotype.Repository

@Repository
class SongRepository {
    protected val songs = listOf(
        Song(1, "테스형", "나훈아"),
        Song(2, "사랑에 연습이 있다면", "임재현"),
        Song(3, "총 맞은 것처럼", "백지영"),
    )

    fun fetchSong() = songs

    fun getSong(index: Int) = songs[index]

    val songsSize: Int
        get() = songs.size
}