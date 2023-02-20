package com.codestates.seb42_pre_031.question.dto;

import com.codestates.seb42_pre_031.answer.dto.AnswerResponseDto;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class QuestionResponseDto {

    private long questionId;

    private String questionTitle;

    private LocalDateTime createdAt;

    private int questionView;

    private String questionContents;

    private String questionTrial;

    //createdby 관련해서 수정하기
    private long memberId;

    private List<AnswerResponseDto> answers;

}
