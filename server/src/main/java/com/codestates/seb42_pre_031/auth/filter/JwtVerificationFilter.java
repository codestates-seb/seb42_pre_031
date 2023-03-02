package com.codestates.seb42_pre_031.auth.filter;

import com.codestates.seb42_pre_031.auth.jwt.JwtTokenizer;
import com.codestates.seb42_pre_031.utils.CustomAuthorityUtils;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

public class JwtVerificationFilter extends OncePerRequestFilter {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    public JwtVerificationFilter(JwtTokenizer jwtTokenizer,
                                 CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            Map<String, Object> claims = verifyJws(request);
            setAuthenticationToContext(claims);
        } catch (SignatureException se) {
            request.setAttribute("exception", se);
        } catch (ExpiredJwtException ee) {
            request.setAttribute("exception", ee);
        } catch (Exception e) {
            request.setAttribute("exception", e);
        }

        //문제없이 JWT의 서명 검증에 성공하고, Security Context에 Authentication을 저장한 뒤에는 다음(Next) Security Filter를 호출
        filterChain.doFilter(request, response);
    }

    //OncePerRequestFilter의 shouldNotFilter()를 오버라이드 한 것으로, 특정 조건에 부합하면(true이면) 해당 Filter의 동작을 수행하지 않고 다음 Filter로 건너뛰도록
    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        String authorization = request.getHeader("Authorization");
        return authorization == null || !authorization.startsWith("Bearer");
    }
    //이 말의 의미는 JWT가 Authorization header에 포함되지 않았다면 JWT 자격증명이 필요하지 않은 리소스에 대한 요청이라고 판단하고 다음(Next) Filter로 처리를 넘기는 것입니다.
    //만일 JWT 자격 증명이 필요한 리소스 요청인데 실수로 JWT를 포함하지 않았다 하더라도 이 경우에는 Authentication이 정상적으로 SecurityContext에 저장되지 않은 상태이기 때문에 다른 Security Filter를 거쳐 결국 Exception을 던지게 될 것입니다.



    private Map<String, Object> verifyJws(HttpServletRequest request) {
        // JWS(JSON Web Token Signed)
        String jws = request.getHeader("Authorization").replace("Bearer ", ""); //클라이언트가 response header로 전달 받은 JWT를 request header에 추가해서 서버 측에 전송한 것
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        Map<String, Object> claims = jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody();

        return claims;
    }

    //Authentication 객체를 SecurityContext에 저장하기 위한 private 메서드
    private void setAuthenticationToContext(Map<String, Object> claims) {
        String username = (String) claims.get("username");
        List<GrantedAuthority> authorities = authorityUtils.createAuthorities((List)claims.get("roles"));
        Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, authorities);
        SecurityContextHolder.getContext().setAuthentication(authentication); //SecurityContext에 Authentication 객체를 저장
    }

}
