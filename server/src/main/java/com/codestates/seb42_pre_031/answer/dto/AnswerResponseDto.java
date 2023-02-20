package com.codestates.seb42_pre_031.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@AllArgsConstructor
public class AnswerResponseDto {
    private int answerId;
    private int questionId;
    private int memberId;
    private String contents;
   // private int voteCount;
}
