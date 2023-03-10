package com.codestates.seb42_pre_031.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.util.Assert;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;
import java.util.Stack;

public class AnswerDto {
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post {
        private long memberId;
        private long questionId;
        @NotNull
        @Pattern(regexp = "^(?!\\s+$).+", message = "Fill in the blank.")
        private String contents;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Patch {
        private long answerId;
        @Pattern(regexp = "^(?!\\s+$).+", message = "Fill in the blank.")
        private String contents;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response {
        private long answerId;
        private long questionId;
        private long memberId;
        private String contents;
        private int voteACount;
    }
}