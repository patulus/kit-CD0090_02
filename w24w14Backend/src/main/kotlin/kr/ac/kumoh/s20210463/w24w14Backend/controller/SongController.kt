package kr.ac.kumoh.s20210463.w24w14Backend.controller

import kr.ac.kumoh.s20210463.w24w14Backend.model.Song
import kr.ac.kumoh.s20210463.w24w14Backend.service.SongService
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class SongController(private val songService: SongService) {
    @GetMapping("/api/songs")
    fun getAllSongs(): List<Song> = songService.getAllSongs()
}