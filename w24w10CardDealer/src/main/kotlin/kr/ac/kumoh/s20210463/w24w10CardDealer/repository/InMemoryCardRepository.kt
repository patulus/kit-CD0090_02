package kr.ac.kumoh.s20210463.w24w10CardDealer.repository

import kr.ac.kumoh.s20210463.w24w10CardDealer.model.Card
import org.springframework.stereotype.Repository

@Repository
class InMemoryCardRepository : CardRepository {
    private val cards: MutableList<Card> = mutableListOf()

    override val size: Int
        get() = cards.size

    override fun add(card: Card) {
        this.cards.add(card)
    }

    override fun getAllCards(): List<Card> {
        return this.cards
    }

    override fun clear() {
        this.cards.clear()
    }

}