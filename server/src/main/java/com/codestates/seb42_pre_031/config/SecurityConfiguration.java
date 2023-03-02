package com.codestates.seb42_pre_031.config;

import com.codestates.seb42_pre_031.auth.filter.JwtAuthenticationFilter;
import com.codestates.seb42_pre_031.auth.filter.JwtVerificationFilter;
import com.codestates.seb42_pre_031.auth.handler.MemberAccessDeniedHandler;
import com.codestates.seb42_pre_031.auth.handler.MemberAuthenticationEntryPoint;
import com.codestates.seb42_pre_031.auth.handler.MemberAuthenticationFailureHandler;
import com.codestates.seb42_pre_031.auth.handler.MemberAuthenticationSuccessHandler;
import com.codestates.seb42_pre_031.auth.jwt.JwtTokenizer;
import com.codestates.seb42_pre_031.utils.CustomAuthorityUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class SecurityConfiguration {

    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils; // 추가

    public SecurityConfiguration(JwtTokenizer jwtTokenizer,
                                   CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin() // (1)
                .and()
                .csrf().disable()        // 로컬이 아닌데 이제우짜나..
                .cors(withDefaults())// corsConfigurationSource라는 이름으로 등록된 Bean을 이용
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) //stateless한 애플리케이션을 유지하기 위해 세션 생성 않도록 설정
                .and()
                .formLogin().disable()   // CSR(Client Side Rendering) 방식에서 주로 사용하는 JSON 포맷으로 Username과 Password를 전송하는 방식을 사용할 것이므로 폼로그인 방식 비활성화
                .httpBasic().disable()   // HTTP Basic 인증은 request를 전송할 때 마다 Username/Password 정보를 HTTP Header에 실어서 인증을 하는 방식으로 우리 코스에서는 사용하지 않으므로.
                .exceptionHandling()
                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())
                .accessDeniedHandler(new MemberAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers(HttpMethod.POST, "/*/members").permitAll()
                        .antMatchers(HttpMethod.PATCH, "/*/members/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/*/members").permitAll()
                        .antMatchers(HttpMethod.GET, "/*/members/**").hasRole("USER")//admin도 딱히 필요 없을듯 하여 생략
                        .antMatchers(HttpMethod.DELETE, "/*/members/**").hasRole("USER")
                        .antMatchers(HttpMethod.POST, "/*/answers").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH, "/*/answers/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/*/answers").permitAll()
                        .antMatchers(HttpMethod.GET, "/*/answers/**").permitAll()
                        .antMatchers(HttpMethod.DELETE, "/*/answers/**").hasRole("USER")
                        .antMatchers(HttpMethod.POST, "/*/questions").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH, "/*/questions/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/*/questions").permitAll()
                        .antMatchers(HttpMethod.GET, "/*/questions/**").permitAll()
                        .antMatchers(HttpMethod.DELETE, "/*/questions/**").hasRole("USER")
                        .anyRequest().permitAll()
                );

        //폼 로그인과 HTTP Basic 인증을 disable하면 해당 인증과 관련된 Security Filter(UsernamePasswordAuthenticationFilter, BasicAuthenticationFilter 등)가 비활성화 된다는 사실을 참고하기 바랍니다.

        return http.build();
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {

        @Override
        public void configure(HttpSecurity builder) throws Exception {  //Configuration을 커스터마이징
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);  //getSharedObject() 를 통해서 Spring Security의 설정을 구성하는 SecurityConfigurer 간에 공유되는 객체 얻는

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);  //AuthenticationManager와 JwtTokenizer를 DI
            jwtAuthenticationFilter.setFilterProcessesUrl("/v1/auth/login"); //디폴트 request URL인 “/login”을 변경
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils); // JwtVerificationFilter의 인스턴스를 생성하면서 JwtVerificationFilter에서 사용되는 객체들을 생성자로 DI

            //Spring Security Filter Chain에 추가
            builder.addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }

        @Bean
        public PasswordEncoder passwordEncoder() {
            return PasswordEncoderFactories.createDelegatingPasswordEncoder();
        }


        @Bean
        CorsConfigurationSource corsConfigurationSource() {
            CorsConfiguration configuration = new CorsConfiguration();
            configuration.setAllowedOrigins(Arrays.asList("*"));   //setAllowedOrigins()을 통해 모든 출처(Origin)에 대해 스크립트 기반의 HTTP 통신을 허용하도록 설정합니다. 이 설정은 운영 서버 환경에서 요구사항에 맞게 변경이 가능
            configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PATCH", "DELETE"));
            configuration.addAllowedHeader("*");
            configuration.addExposedHeader("*");

            UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();   //CorsConfigurationSource 인터페이스의 구현 클래스인 UrlBasedCorsConfigurationSource 클래스의 객체를 생성
            source.registerCorsConfiguration("/**", configuration); //모든 URL에 앞에서 구성한 CORS 정책(CorsConfiguration)을 적용
            return source;
        }
    }

}
