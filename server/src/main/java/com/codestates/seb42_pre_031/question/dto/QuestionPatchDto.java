package com.codestates.seb42_pre_031.question.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class QuestionPatchDto {

    private long questionId;

    private String questionTitle;

    private String questionContents;

    private String questionTrial;

}
