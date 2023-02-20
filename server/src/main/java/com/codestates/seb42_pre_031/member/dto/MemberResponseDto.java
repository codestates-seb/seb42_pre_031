package com.codestates.seb42_pre_031.member.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;

@Builder
//Builder 애너테이션 왜붙엇냐
@Getter
@Setter
public class MemberResponseDto {

    private long memberId;

    private String memberEmail;

    private String memberName;

    private String memberPW;

    private String nickName;

    private String aboutMe;

}
