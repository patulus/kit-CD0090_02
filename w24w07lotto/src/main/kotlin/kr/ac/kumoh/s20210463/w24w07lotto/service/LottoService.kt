package kr.ac.kumoh.s20210463.w24w07lotto.service

import org.springframework.stereotype.Service
import kotlin.random.Random

@Service
class LottoService {
    fun getLuckyNumbers(): Array<Int> {
        val numbers = arrayOf(0, 0, 0, 0, 0, 0)

        for (i in numbers.indices) {
            numbers[i] = Random.nextInt(45) + 1
        }

        return numbers
    }
}