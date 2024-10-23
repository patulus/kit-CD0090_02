package kr.ac.kumoh.s20210463.w24w09javalotto.repository;

import kr.ac.kumoh.s20210463.w24w09javalotto.model.LottoNumber;
import org.springframework.stereotype.Repository;

@Repository
public class InMemoryLottoRepository implements LottoRepository {
    private LottoNumber storedLottoNumber = null;

    @Override
    public LottoNumber save(LottoNumber lottoNumber) {
        this.storedLottoNumber = lottoNumber;
        return this.storedLottoNumber;
    }

    @Override
    public LottoNumber find() {
        return storedLottoNumber;
    }
}
