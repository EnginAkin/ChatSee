package tr.com.tandempartner.tandem.service;

import org.springframework.stereotype.Service;
import tr.com.tandempartner.tandem.entity.words.Word;

import java.util.List;

@Service
public interface WordService {

    List<Word> getWordList(Long id);
    void addWord(Word word);


    void deleteWord(Long wordId);
}
