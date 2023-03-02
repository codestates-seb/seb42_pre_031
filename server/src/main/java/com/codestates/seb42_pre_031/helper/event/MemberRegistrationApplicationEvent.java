package com.codestates.seb42_pre_031.helper.event;

import com.codestates.seb42_pre_031.member.entity.Member;
import lombok.Getter;

@Getter
public class MemberRegistrationApplicationEvent {

    private Member member;
    public MemberRegistrationApplicationEvent(Member member) {
        this.member = member;
    }
}
