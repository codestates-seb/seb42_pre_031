package com.codestates.seb42_pre_031.member.service;

import com.codestates.seb42_pre_031.exception.BusinessLogicException;
import com.codestates.seb42_pre_031.exception.ExceptionCode;
import com.codestates.seb42_pre_031.member.entity.Member;
import com.codestates.seb42_pre_031.member.repository.MemberRepository;
import com.codestates.seb42_pre_031.utils.CustomBeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberService {

    private final MemberRepository memberRepository;
    private final CustomBeanUtils<Member> beanUtils;

    public MemberService(MemberRepository memberRepository, CustomBeanUtils<Member> beanUtils) {
        this.memberRepository = memberRepository;
        this.beanUtils = beanUtils;
    }

    //여유되면 닉네임 중복 확인도..
    public Member createMember(Member member) {

        verifyExistsEmail(member.getMemberEmail());

        return memberRepository.save(member);
    }

    public Member updateMember(Member member) {

        Member findMember = findVerifiedMember(member.getMemberId());

        Member updatedMember = beanUtils.copyNonNullProperties(member, findMember);
        return memberRepository.save(updatedMember);

        /*
        Optional.ofNullable(member.getMemberName())
                .ifPresent(name -> findMember.setMemberName(name));
        Optional.ofNullable(member.getMemberPW())
                .ifPresent(password -> findMember.setMemberPW(password));
        Optional.ofNullable(member.getNickName())
                .ifPresent(nickName -> findMember.setNickName(nickName));
        Optional.ofNullable(member.getAboutMe())
                .ifPresent(aboutMe -> findMember.setAboutMe(aboutMe));
        return memberRepository.save(findMember);
         */
    }

    public Member findMember(long memberId) {

        return findVerifiedMember(memberId);
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
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }



}