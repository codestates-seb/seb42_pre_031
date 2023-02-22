package com.codestates.seb42_pre_031.question.mapper;

import com.codestates.seb42_pre_031.question.dto.QuestionPatchDto;
import com.codestates.seb42_pre_031.question.dto.QuestionPostDto;
import com.codestates.seb42_pre_031.question.dto.QuestionResponseDto;
import com.codestates.seb42_pre_031.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

import java.util.List;
@Mapper(componentModel = "spring")
public interface QuestionMapper {

    Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);

    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);

    @Mapping(source = "member.memberId", target = "memberId")
    @Mapping(source = "voteQ.voteQCount", target = "voteQCount")
    QuestionResponseDto questionToQuestionResponseDto(Question question);

    List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions);
}
