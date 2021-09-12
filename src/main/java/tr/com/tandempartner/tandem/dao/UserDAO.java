package tr.com.tandempartner.tandem.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.stereotype.Repository;
import tr.com.tandempartner.tandem.constant.GeneralResponse;
import tr.com.tandempartner.tandem.entity.user.LanguageOption;
import tr.com.tandempartner.tandem.entity.user.User;
import tr.com.tandempartner.tandem.entity.user.UserInfo;
import tr.com.tandempartner.tandem.entity.words.Word;

@Repository
public interface UserDAO  extends JpaRepository<User, Long>{



	Optional<User> findByEmail(String email);

	/*@Query(value = "UPDATE User  SET  User.name= ?1 , User.surname = ?2, User.email=?3, User.want_to_learn_language=?4, User.main_language=?5 WHERE User.ID=?6", nativeQuery = true)
	GeneralResponse updateUser(String name, String surname, String email, LanguageOption wantToLearnLanguage,LanguageOption mainLanguage,Long id);
	 */
	@Query(value = "SELECT * FROM public.user WHERE ID NOT IN (select friends_id from public.user_friends where user_id= ?1 ) AND ID NOT IN (select user_id from public.user_friends where friends_id= ?1 )", nativeQuery = true)
	List<User> getSuggestForUser(Long id);
	
	
	@Query(value = "SELECT * FROM public.user WHERE ID IN (select friends_id from public.user_friends where user_id= ?1 ) OR ID IN (select user_id from public.user_friends where friends_id= ?1 )  ", nativeQuery = true)
	List<User> getUserFriends(Long id);

	@Query(value = "SELECT * FROM public.word WHERE user_id=?1" ,nativeQuery = true)
	List<Word> getWordList(Long id);



}
