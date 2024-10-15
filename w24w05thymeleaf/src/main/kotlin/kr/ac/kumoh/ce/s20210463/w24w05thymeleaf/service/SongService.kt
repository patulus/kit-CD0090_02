package kr.ac.kumoh.ce.s20210463.w24w05thymeleaf.service

import kr.ac.kumoh.ce.s20210463.w24w05thymeleaf.repository.SongRepository
import org.springframework.stereotype.Service
import kotlin.random.Random

@Service
class SongService(val repository: SongRepository) {

    fun getRandomSong() = repository.getSong(Random.nextInt(repository.songSize))
    fun getAllSongs() = repository.fetchSong()

}