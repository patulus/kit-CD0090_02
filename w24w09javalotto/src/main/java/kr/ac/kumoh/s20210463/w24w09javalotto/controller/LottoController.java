package kr.ac.kumoh.s20210463.w24w09javalotto.controller;

import kr.ac.kumoh.s20210463.w24w09javalotto.model.LottoNumber;
import kr.ac.kumoh.s20210463.w24w09javalotto.service.LottoService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LottoController {
    private final LottoService lottoService;

    public LottoController(LottoService lottoService) {
        this.lottoService = lottoService;
    }

    @GetMapping("/lotto/numbers")
    public String generateNumbers(Model model) {
        LottoNumber lottoNumber = lottoService.getLuckyNumbers();
        model.addAttribute("numbers", lottoNumber.getNumbers());
        return "lotto";
    }
}
