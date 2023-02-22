package com.codestates.seb42_pre_031.answer.dto;

import lombok.Getter;
import org.springframework.util.Assert;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
public class AnswerPostDto {
    @NotBlank // 공백과 Null 값을 허용하지 않는다.
    private String contents;

    @Positive //양수만 가능
    private long memberId;

    private long questionId;

    /*public void addQuestionId(int questionId) {
        Assert.notNull(questionId, "질문 정보가 존재하지 않습니다."); // Assert -> 조건문을 단순화하고 반복적 코드를 줄여준다.

    }*/
}
