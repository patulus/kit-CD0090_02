package kr.ac.kumoh.s20210463.w24w09javalotto.repository;

import kr.ac.kumoh.s20210463.w24w09javalotto.model.LottoNumber;

public interface LottoRepository {
    LottoNumber save(LottoNumber lottoNumber);
    LottoNumber find();
}
