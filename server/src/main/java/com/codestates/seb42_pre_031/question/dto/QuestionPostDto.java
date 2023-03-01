package com.codestates.seb42_pre_031.question.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;

@Getter
@Setter
public class QuestionPostDto {

    private long memberId;

    @NotNull
    @Pattern(regexp = "^(?!\\s+$).+", message = "Fill in the blank.")
    private String questionTitle;

    @NotNull
    @Pattern(regexp = "^(?!\\s+$).+", message = "Fill in the blank.")
    private String questionContents;

    @NotNull
    @Pattern(regexp = "^(?!\\s+$).+", message = "Fill in the blank.")
    private String questionTrial;

}