package com.codestates.seb42_pre_031.answer.controller;

import com.codestates.seb42_pre_031.answer.dto.AnswerDto;
import com.codestates.seb42_pre_031.answer.dto.AnswerPatchDto;
import com.codestates.seb42_pre_031.answer.dto.AnswerPostDto;
import com.codestates.seb42_pre_031.answer.entity.Answer;
import com.codestates.seb42_pre_031.answer.mapper.AnswerMapper;
import com.codestates.seb42_pre_031.answer.service.AnswerService;
import com.codestates.seb42_pre_031.member.entity.Member;
import com.codestates.seb42_pre_031.answer.entity.Answer;
import com.codestates.seb42_pre_031.question.entity.Question;
import com.codestates.seb42_pre_031.question.service.QuestionService;
import com.codestates.seb42_pre_031.response.MultiResponseDto;
import com.codestates.seb42_pre_031.response.PageInfo;
import com.codestates.seb42_pre_031.response.SingleResponseDto;
import com.codestates.seb42_pre_031.utils.UriCreator;
import com.codestates.seb42_pre_031.voteA.entity.VoteA;
import com.codestates.seb42_pre_031.voteQ.entity.VoteQ;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/v1")
@Validated
@Slf4j
public class AnswerController {

    private final static String ANSWER_DEFAULT_URL = "/v1";
    private final AnswerService answerService;
    private final AnswerMapper mapper;




    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    @PostMapping("/questions/{question-id}/answers")//기존 서비스 코드 long questionId 파라미터가 충돌
    public ResponseEntity postAnswer(@PathVariable("question-id") long questionId,
                                     @RequestBody AnswerDto.Post answerPostDto) {
        answerPostDto.setQuestionId(questionId);
        Answer answer = mapper.answerPostDtoToAnswer(answerPostDto);



        Answer createdAnswer = answerService.createAnswer(questionId, answer);

        //TODO: NPE
        //UricomponentesBUilder를 통해 uri 템플릿 변수 지정 =>
        URI location = UriCreator.createUri(ANSWER_DEFAULT_URL+"/answers", createdAnswer.getAnswerId());

        return ResponseEntity.created(location).build();
    }

    //TODO: qeustionId 따와서 가져오는 걸로 questions/{questionid}/answers
    @GetMapping("/questions/{question-id}/answers")
    public ResponseEntity getAnswers(@PathVariable("question-id") long questionId) {


        Page<Answer> pageAnswers = answerService.findAnswers(questionId,0, 100);
        List<Answer> answers = pageAnswers.getContent();
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answersToAnswerResponseDtos(answers)),
                HttpStatus.OK);
    }

    @GetMapping("/answers/{answer-id}")
    public ResponseEntity getAnswer(@PathVariable("answer-id") long answerId) {


        Answer answer = answerService.findAnswer(answerId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)),
                HttpStatus.OK);
    }

    @PatchMapping("/answers/{answer-id}")
    public ResponseEntity patchAnswer (@PathVariable("answer-id") long answerId,
                                       @RequestBody AnswerDto.Patch answerPatchDto) {

        answerPatchDto.setAnswerId(answerId);

        //TODO : service 구현
        Answer answer = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));

        return new ResponseEntity(new SingleResponseDto(mapper.answerToAnswerResponseDto(answer)), HttpStatus.OK);

    }

    //TODO:
    @PatchMapping("/answers/{answer-id}/votePlus")
    public ResponseEntity patchVoteAPlus(
            @PathVariable("answer-id") @Positive long answerId) {
        Answer answer =
                answerService.findAnswer(answerId);
        Answer addedVoteA = answerService.updateVoteAPlus(answer);
        int voteAcount = addedVoteA.getVoteA().getVoteACount();
        String voteACountJson =
                "{\"" +
                        "" + "voteACount\": \"" + Integer.toString(voteAcount) + "" +
                        "\"}";;

        return new ResponseEntity<>(voteACountJson, HttpStatus.OK);
    }

    //TODO:
    @PatchMapping("/answers/{answer-id}/voteMinus")
    public ResponseEntity patchVoteAMinus(
            @PathVariable("answer-id") @Positive long answerId) {
        Answer answer =
                answerService.findAnswer(answerId);
        Answer droppedVoteA = answerService.updateVoteAMinus(answer);
        int voteAcount = droppedVoteA.getVoteA().getVoteACount();
        String voteACountJson =
                "{\"" +
                        "" + "voteACount\": \"" + Integer.toString(voteAcount) + "" +
                        "\"}";;

        return new ResponseEntity<>(voteACountJson, HttpStatus.OK);
    }

    //TODO:
    @GetMapping("/answers/{answer-id}/voteA")
    public String getVoteACount(
            @PathVariable("answer-id") @Positive long answerId) {

        Answer answer = answerService.findAnswer(answerId);
        int voteAcount = answer.getVoteA().getVoteACount();
        String voteACountJson =
                "{\"" +
                        "" + "voteACount\": \"" + Integer.toString(voteAcount) + "" +
                        "\"}";;

        return voteACountJson;
    }

    @DeleteMapping("/answers/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive long answerId) {

       answerService.deleteAnswer(answerId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
