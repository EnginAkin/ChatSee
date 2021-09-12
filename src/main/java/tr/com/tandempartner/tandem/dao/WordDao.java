package tr.com.tandempartner.tandem.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tr.com.tandempartner.tandem.entity.words.Word;

import java.util.List;
@Repository
public interface WordDao extends JpaRepository<Word,Long> {
    @Query(value="SELECT * FROM public.word where user_id=?1 ",nativeQuery = true)
    List<Word> findByuserID(Long id);
}
