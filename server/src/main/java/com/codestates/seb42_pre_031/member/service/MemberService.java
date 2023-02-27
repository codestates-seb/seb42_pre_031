package com.codestates.seb42_pre_031.member.service;

import com.codestates.seb42_pre_031.exception.BusinessLogicException;
import com.codestates.seb42_pre_031.exception.ExceptionCode;
import com.codestates.seb42_pre_031.helper.event.MemberRegistrationApplicationEvent;
import com.codestates.seb42_pre_031.member.entity.Member;
import com.codestates.seb42_pre_031.member.repository.MemberRepository;
//import com.codestates.seb42_pre_031.utils.CustomBeanUtils;
import com.codestates.seb42_pre_031.utils.CustomAuthorityUtils;
import com.codestates.seb42_pre_031.utils.CustomBeanUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final ApplicationEventPublisher publisher;
    private final CustomBeanUtils<Member> beanUtils;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;


    public Member createMember(Member member) {

        verifyExistsEmail(member.getMemberEmail());

        String encryptedPassword = passwordEncoder.encode(member.getMemberPW());
        member.setMemberPW(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(member.getMemberEmail());
        member.setRoles(roles);

        Member savedMember = memberRepository.save(member);

//        publisher.publishEvent(new MemberRegistrationApplicationEvent(savedMember));

        return savedMember;
    }

    public Member updateMember(Member member) {

        Member findMember = findVerifiedMember(member.getMemberId());

        Member updatedMember = beanUtils.copyNonNullProperties(member, findMember);
        return memberRepository.save(updatedMember);


//        Optional.ofNullable(member.getMemberName())
//                .ifPresent(name -> findMember.setMemberName(name));
//        Optional.ofNullable(member.getMemberPW())
//                .ifPresent(password -> findMember.setMemberPW(password));
//        Optional.ofNullable(member.getNickName())
//                .ifPresent(nickName -> findMember.setNickName(nickName));
//        Optional.ofNullable(member.getAboutMe())
//                .ifPresent(aboutMe -> findMember.setAboutMe(aboutMe));
//        return memberRepository.save(findMember);

    }

    public Member findMember(long memberId) {

        return findVerifiedMember(memberId);
    }

    public List<Member> findMembers() {
        return memberRepository.findAll();
    }


    public void deleteMember(long memberId) {
        Member findMember = findVerifiedMember(memberId);

        memberRepository.delete(findMember);
    }

    // 이미 존재하는 회원인지를 검증
    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember =
                memberRepository.findById(memberId);
        Member findMember =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }

    // 이미 등록된 이메일 주소인지 검증
    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByMemberEmail(email);
        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }



}