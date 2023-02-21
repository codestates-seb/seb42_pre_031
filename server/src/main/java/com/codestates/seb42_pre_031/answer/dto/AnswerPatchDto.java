package com.codestates.seb42_pre_031.answer.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class AnswerPatchDto {
    @NotBlank
    private String contents;

    private long answerId;

    private long questionId;
}
