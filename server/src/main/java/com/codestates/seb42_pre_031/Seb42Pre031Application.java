package com.codestates.seb42_pre_031;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class Seb42Pre031Application {

	public static void main(String[] args) {
		SpringApplication.run(Seb42Pre031Application.class, args);
	}

}
