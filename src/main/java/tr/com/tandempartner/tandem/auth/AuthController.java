package tr.com.tandempartner.tandem.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import tr.com.tandempartner.tandem.constant.GeneralResponse;
import tr.com.tandempartner.tandem.entity.user.User;

@RestController
@RequestMapping(value="/api/v1")
public class AuthController {
	
	@Autowired
	AuthService authService;
	
	@PostMapping("/login")
	GeneralResponse handleLogin(@RequestBody Credentials credentials) {
		
		return authService.authenticate(credentials);
		
	}
	@PostMapping("/handlePassword")
	GeneralResponse handlePassword (@RequestBody String password, @RequestHeader(name="Authorization") String authorization){
		User user=authService.getUserDetails(authorization);
		password = password.substring(0, password.length() - 1);
		System.out.println("password : "+password);
		System.out.println("user password : "+user.getPassword());

		if(user.getPassword().equals(password)){
			System.out.println("başarılı");
			return new GeneralResponse(true,"Password matched");
		}
		return new GeneralResponse(false,"Password Not  matched");
	}
	@PostMapping("/logout")
	GeneralResponse handleLogin(@RequestHeader(name = "Authorization") String authorization) {
		
		authService.clearToken(authorization);

		return new GeneralResponse(true,"Uygulamadan çıkış yaptınız.");
	}

}
