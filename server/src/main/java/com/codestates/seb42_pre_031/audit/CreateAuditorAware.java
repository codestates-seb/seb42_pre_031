package com.codestates.seb42_pre_031.audit;

import com.codestates.seb42_pre_031.member.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.AuditorAware;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpSession;
import java.util.Optional;

/**
 * HttpSession을 이용해 로그인 처리 구현하여 MemberId를 반환
 * 세션에서 정보를 가져오고, 정보가 없을 경우 null을 반환한다.
 * 세션의멤버 정보에서 ID를 가져오기 위해 SessionUser에 id를 추가한다.
 */
@RequiredArgsConstructor
@Component
public class CreateAuditorAware implements AuditorAware<String> {

//    private final HttpSession httpSession;

    @Override
    public Optional<String> getCurrentAuditor() {
//        SessionUser user = (SessionUser) httpSession.getAttribute("user");
//        if (user == null)
//            return null;

//        return Optional.ofNullable(user.getId());

        return Optional.of("back-end");

    }
}
