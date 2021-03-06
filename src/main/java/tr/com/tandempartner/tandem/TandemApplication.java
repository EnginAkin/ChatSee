package tr.com.tandempartner.tandem;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
import tr.com.tandempartner.tandem.chatServer.WebSocketImpl;

@EnableSwagger2
@SpringBootApplication
public class TandemApplication {

	public static void main(String[] args)  {




		SpringApplication.run(TandemApplication.class, args);

	
		new WebSocketImpl().start();
	}
	
	@Bean
    public Docket api() { 
        return new Docket(DocumentationType.SWAGGER_2)  
          .select()                                  
          .apis(RequestHandlerSelectors.basePackage("tr.com.tandempartner.tandem"))                                     
          .build();                                           
    }
	
	
	

}
