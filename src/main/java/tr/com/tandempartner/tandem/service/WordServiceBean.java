package tr.com.tandempartner.tandem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tr.com.tandempartner.tandem.dao.WordDao;
import tr.com.tandempartner.tandem.entity.words.Word;

import java.util.List;

@Service
public class WordServiceBean implements WordService {

    @Autowired
    private WordDao wordDao;

    @Override
    public List<Word> getWordList(Long id) {
        return this.wordDao.findByuserID(id);
    }

    @Override
    public void addWord(Word word) {
        this.wordDao.save(word);
    }

    @Override
    public void deleteWord(Long wordId) {
        this.wordDao.deleteById(wordId);
    }
}
