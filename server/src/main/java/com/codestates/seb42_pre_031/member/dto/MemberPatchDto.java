package com.codestates.seb42_pre_031.member.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.lang.Nullable;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Getter
@Setter
public class MemberPatchDto {

    /*
    정규표현식으로 해야 다른 거 수정이라 null 인경우는 제외 가능 patch 핸들러메서드에 @Valid 도 넣어주기
    나중에 정규표현식 @Pattern(regexp = "", message = "회원 이름은 공백이 아니어야 합니다.")
    https://urclass.codestates.com/content/1253eda1-a5c4-47af-b8eb-2531117b5463?playlist=2249
    정규 표현식 관련 자료
    https://www.w3schools.com/java/java_regex.asp
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions
    정규 표현식 모범 사례 자료
    https://docs.microsoft.com/ko-kr/dotnet/standard/base-types/best-practices
    */

    private long memberId;

    //중간 공백 두개까지만 허용,연달아 두개는 불가, 시작과 끝은 공백이 아니어야함
    @Pattern(regexp = "^\\S+\\s?\\S+\\s?\\S+$", message = "No more than 2 spaces / Spaces should not be in series.")
    private String memberName;

    @Pattern(regexp = "^\\S{5,}$", message = "Should be more than 5 words.")
    private String memberPW;

    //중간 공백 두개까지만 허용, 연달아 두개는 불가, 시작과 끝은 공백이 아니어야함
    @Pattern(regexp = "^\\S+\\s?\\S+\\s?\\S+$", message = "No more than 2 spaces / Spaces should not be in series.")
    private String nickName;

    private String aboutMe;



}
