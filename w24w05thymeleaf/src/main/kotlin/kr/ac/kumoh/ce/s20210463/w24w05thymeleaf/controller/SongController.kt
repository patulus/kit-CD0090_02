package kr.ac.kumoh.ce.s20210463.w24w05thymeleaf.controller

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping

@Controller
class SongController {
    @GetMapping("/song/random")
    fun getRandomSong(model: Model): String {
        model.addAttribute("songTitle", "소주 한 잔")
        return "random"
    }
}