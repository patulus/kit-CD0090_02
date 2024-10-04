package kr.ac.kumoh.s20210463.w23w0402controller.service

import kr.ac.kumoh.s20210463.w23w0402controller.model.Song
import kr.ac.kumoh.s20210463.w23w0402controller.repository.SongRepository
import org.springframework.stereotype.Service
import kotlin.random.Random

@Service
class SongService(val repository: SongRepository) {
    fun getAllSongs(): List<Song> {
        return repository.fetchSong()
    }

    fun getRandomSong(): Song {
        return repository.getSong(Random.nextInt(repository.songsSize))
    }
}