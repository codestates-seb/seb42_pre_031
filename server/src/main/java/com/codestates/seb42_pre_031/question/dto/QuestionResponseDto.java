package com.codestates.seb42_pre_031.question.dto;

import com.codestates.seb42_pre_031.answer.dto.AnswerDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class QuestionResponseDto {


    private long questionId;

    private String questionTitle;

    private LocalDateTime createdAt = LocalDateTime.now();

//    private int questionView;

    private String questionContents;

    private String questionTrial;

    //createdby 관련해서 수정하기
    private long memberId;

    private int voteQCount;

    private List<AnswerDto.Response> answers;
}
