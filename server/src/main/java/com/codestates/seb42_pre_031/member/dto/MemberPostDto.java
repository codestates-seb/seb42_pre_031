package com.codestates.seb42_pre_031.member.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class MemberPostDto {

//    @NotBlank 영어 이름에 스페이스(" ")가 들어가서 이걸 사용하면 안되겠지..? 공백이거나 공백으로 시작하지 않는 정규표현식 만들기 후순위.
    private String memberName;

    @NotBlank
    @Email
    private String memberEmail;

    @NotBlank
    private String memberPW;

//    @NotBlank
    private String nickName;

    private String aboutMe;

}
