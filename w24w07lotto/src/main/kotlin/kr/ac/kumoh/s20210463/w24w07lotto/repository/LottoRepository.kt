package kr.ac.kumoh.s20210463.w24w07lotto.repository

import kr.ac.kumoh.s20210463.w24w07lotto.model.LottoNumber

interface LottoRepository {
    fun save(lottoNumber: LottoNumber): LottoNumber
    fun find(): LottoNumber?
}