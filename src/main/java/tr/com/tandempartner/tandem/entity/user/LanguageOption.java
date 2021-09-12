package tr.com.tandempartner.tandem.entity.user;

import java.io.Serializable;

public enum LanguageOption implements Serializable{
	
	EN("EN","English"),
	TR("TR","Turkish"),
	DEU("DEU","Deutch"),
	FR("FR","FRENCH");
	LanguageOption(String code, String name) {

	}
	LanguageOption(String code) {
		 LanguageOption.valueOf(code);
	}
	
	LanguageOption getLanguageOption(String code){
		return LanguageOption.valueOf(code);
	}

}
