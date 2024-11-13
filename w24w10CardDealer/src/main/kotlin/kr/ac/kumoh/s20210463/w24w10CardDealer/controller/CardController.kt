package kr.ac.kumoh.s20210463.w24w10CardDealer.controller

import kr.ac.kumoh.s20210463.w24w10CardDealer.service.CardService
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping

@Controller
class CardController(private val cardService: CardService) {
    @GetMapping("/cards/random")
    fun getRandomCard(model: Model): String {
        cardService.dealCards()

        val cards = cardService.getAllCards()

        model.addAttribute("cards", cards.map { it.imageName }) // 프라스 1점
//        model.addAttribute("suit", "spades")
//        model.addAttribute("rank", "2")
        return "cards"
    }
}