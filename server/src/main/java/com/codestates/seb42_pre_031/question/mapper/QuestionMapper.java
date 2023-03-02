package com.codestates.seb42_pre_031.question.mapper;

import com.codestates.seb42_pre_031.answer.dto.AnswerDto;
import com.codestates.seb42_pre_031.member.entity.Member;
import com.codestates.seb42_pre_031.question.dto.QuestionPatchDto;
import com.codestates.seb42_pre_031.question.dto.QuestionPostDto;
import com.codestates.seb42_pre_031.question.dto.QuestionResponseDto;
import com.codestates.seb42_pre_031.question.entity.Question;
import com.codestates.seb42_pre_031.voteQ.entity.VoteQ;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    @Mapping(source = "memberId", target = "member.memberId")
    Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);

    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);

//    @Mapping(source = "member.memberId", target = "memberId")
//    @Mapping(source = "voteQ.voteQCount", target = "voteQCount")
//    @Mapping(source = "answerList", target = "answers")
    default QuestionResponseDto questionToQuestionResponseDto(Question question) {

        if ( question == null ) {
            return null;
        }

        Member member = question.getMember();
        VoteQ voteQ = question.getVoteQ();
        long questionId = question.getQuestionId();
        List<AnswerDto.Response> answers = question.getAnswerList().stream()
                .map(answer -> {
                    AnswerDto.Response answerResponse = new AnswerDto.Response();
                    answerResponse.setAnswerId(answer.getAnswerId());
                    answerResponse.setQuestionId(questionId);
                    answerResponse.setMemberId(answer.getMember().getMemberId());
                    answerResponse.setContents(answer.getContents());
                    answerResponse.setVoteACount(answer.getVoteA().getVoteACount());
                    return answerResponse;
                }).collect(Collectors.toList());
        QuestionResponseDto questionResponseDto = new QuestionResponseDto(questionId, question.getQuestionTitle(), question.getCreatedAt(), question.getQuestionContents(), question.getQuestionTrial(), member.getMemberId(), voteQ.getVoteQCount(), answers);
        return questionResponseDto;
    }


    List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions);
}
