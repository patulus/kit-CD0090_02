package kr.ac.kumoh.s20210463.w24w14Backend.service

import kr.ac.kumoh.s20210463.w24w14Backend.model.Song
import kr.ac.kumoh.s20210463.w24w14Backend.repository.SongRepository
import org.springframework.stereotype.Service

@Service
class SongService(private val songRepository: SongRepository) {
    fun getAllSongs(): List<Song> = songRepository.findAll()
}