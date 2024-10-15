package kr.ac.kumoh.ce.s20210463.w24w05thymeleaf.repository

import kr.ac.kumoh.ce.s20210463.w24w05thymeleaf.model.Song
import org.springframework.stereotype.Repository

@Repository
class SongRepository {

    val songs = listOf(
        Song(1, "사랑에 연습이 있었다면", "임재현"),
        Song(2, "테스형", "나훈아"),
        Song(3, "소주 한 잔", "임창정"),
    )

    val songSize: Int
            get() = songs.size

    fun getSong(index: Int): Song = songs[index]

    fun fetchSong() = songs

}