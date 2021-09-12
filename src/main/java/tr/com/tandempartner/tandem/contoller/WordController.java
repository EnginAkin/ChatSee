package tr.com.tandempartner.tandem.contoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tr.com.tandempartner.tandem.auth.AuthService;
import tr.com.tandempartner.tandem.constant.GeneralResponse;
import tr.com.tandempartner.tandem.entity.user.User;
import tr.com.tandempartner.tandem.entity.words.Word;
import tr.com.tandempartner.tandem.service.WordService;
import tr.com.tandempartner.tandem.service.WordServiceBean;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
public class WordController {

    @Autowired
    AuthService authService;

    @Autowired
    WordService wordService;

    @DeleteMapping("/deleteWord/{wordId}")
    public GeneralResponse deleteWord(@PathVariable(name = "wordId") Long wordId) {
        try {
            wordService.deleteWord(wordId);
            return new GeneralResponse(true, "Kelime Silindi");
        } catch (Exception exception) {
            System.out.println(exception);
            return new GeneralResponse(false, "Kelime Silinemedi");

        }
    }


    @GetMapping("/getWordList")
    public GeneralResponse getWordList(@RequestHeader(name = "Authorization") String token) {


        User user = authService.getUserDetails(token);
        List<Word> wordList = wordService.getWordList(user.getId());
        GeneralResponse rs = new GeneralResponse(true, "işlem başarılı", wordList);
        return rs;
    }

    @PostMapping("/addWord")
    public GeneralResponse addWord(@RequestBody Word word, @RequestHeader(name = "Authorization") String token) {
        try {
            User user = authService.getUserDetails(token);
            word.setUserId(user.getId());
            System.out.println(word);
            this.wordService.addWord(word);
            return new GeneralResponse(true, "işlem başarılı");
        } catch (Exception e) {
            System.out.println("hata yakalandı : ");
            System.out.println(e);
            return new GeneralResponse(false, "başarısız");
        }
    }
}
