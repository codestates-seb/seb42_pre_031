package com.codestates.seb42_pre_031.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@AllArgsConstructor
public class AnswerResponseDto {
    private long answerId;
    private long questionId;
    private long memberId;
    private String contents;
   // private int voteCount;
}
