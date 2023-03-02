package com.codestates.seb42_pre_031.question.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;

@Getter
@Setter
public class QuestionPatchDto {

    private long questionId;

    @Pattern(regexp = "^(?!\\s+$).+", message = "Fill in the blank.")
    private String questionTitle;

    @Pattern(regexp = "^(?!\\s+$).+", message = "Fill in the blank.")
    private String questionContents;

    @Pattern(regexp = "^(?!\\s+$).+", message = "Fill in the blank.")
    private String questionTrial;

}
