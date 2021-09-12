package tr.com.tandempartner.tandem.entity.user;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.validator.internal.util.stereotypes.Lazy;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import tr.com.tandempartner.tandem.entity.words.Word;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor 
public class User implements UserDetails{

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	private String surname;
	
	
	private String password;
	
	@Lazy
	@OneToMany
	private List<User> friends;


	
	@Email
	@NotBlank 
	@NotNull
	private String email;

	@Enumerated(EnumType.STRING)
	private LanguageOption wantToLearnLanguage;

	@Enumerated(EnumType.STRING)
	private LanguageOption mainLanguage;

	@Column(nullable = false, updatable = false)
	@CreationTimestamp
	private Date created;

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return AuthorityUtils.createAuthorityList("Role_user");

	}
	
	

	@Override
	public String getUsername() {
		return this.email;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
	

	
	public UserInfo getUserInfoWithoutFriends() {
	
		UserInfo info = new UserInfo(id, name, surname, null,mainLanguage, wantToLearnLanguage, email,created);
		return info;
		
	}
	
	
}



