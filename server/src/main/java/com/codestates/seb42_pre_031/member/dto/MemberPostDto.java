package com.codestates.seb42_pre_031.member.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Getter
@Setter
public class MemberPostDto {

    @NotNull
    @Pattern(regexp = "^\\S+\\s?\\S+\\s?\\S+$", message = "Not Null / No more than 2 spaces / Spaces should not be in series.")
    private String memberName;
    //null 이 들어올 수 없음, 문자로 시작하고 끝나며, 공백 문자가 최대 2개까지 포함된 문자열

    @NotBlank
    @Email
    private String memberEmail;

    @NotBlank
    @Pattern(regexp = "^\\S{5,}$", message = "Should be more than 5 words.")
    private String memberPW;

    @NotNull
    @Pattern(regexp = "^\\S+\\s?\\S+\\s?\\S+$", message = "Not Null / No more than 2 spaces / Spaces should not be in series.")
    private String nickName;

    private String aboutMe;

}
