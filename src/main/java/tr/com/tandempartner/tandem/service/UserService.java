package tr.com.tandempartner.tandem.service;



import java.util.List;

import org.springframework.stereotype.Service;
import tr.com.tandempartner.tandem.entity.user.User;
import tr.com.tandempartner.tandem.entity.user.UserInfo;
import tr.com.tandempartner.tandem.entity.words.Word;

@Service
public interface UserService {
	void add(User user) throws ExistUserEmailException;
	void saveChangeUserDetail(User user);
	User getUserById(long id);

	List<UserInfo> getSuggestionUsers(User user);

	void addFriend(User user, Long id);

	UserInfo getUserInfo(User user);

}
