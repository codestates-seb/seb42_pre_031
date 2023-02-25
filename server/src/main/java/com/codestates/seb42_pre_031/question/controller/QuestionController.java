package com.codestates.seb42_pre_031.question.controller;

import com.codestates.seb42_pre_031.answer.dto.AnswerPostDto;
import com.codestates.seb42_pre_031.answer.entity.Answer;
import com.codestates.seb42_pre_031.member.entity.Member;
import com.codestates.seb42_pre_031.question.dto.QuestionPatchDto;
import com.codestates.seb42_pre_031.question.dto.QuestionPostDto;
import com.codestates.seb42_pre_031.question.entity.Question;
import com.codestates.seb42_pre_031.question.mapper.QuestionMapper;
import com.codestates.seb42_pre_031.question.service.QuestionService;
import com.codestates.seb42_pre_031.response.MultiResponseDto;
import com.codestates.seb42_pre_031.response.SingleResponseDto;
import com.codestates.seb42_pre_031.utils.UriCreator;
import com.codestates.seb42_pre_031.voteQ.entity.VoteQ;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/v1/questions")
@Validated
@Slf4j
public class QuestionController {

    private final static String QUESTION_DEFAULT_URL = "/v1/questions";
    private final QuestionService questionService;
    private final QuestionMapper questionMapper;

    public QuestionController(QuestionService questionService, QuestionMapper questionMapper) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
    }

    @PostMapping
    public ResponseEntity postQuestion( @RequestBody QuestionPostDto questionPostDto) {
        Question question = questionMapper.questionPostDtoToQuestion(questionPostDto);

        Question createdQuestion = questionService.createQuestion(question);
        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, createdQuestion.getQuestionId());

        return ResponseEntity.created(location).build();
    }


    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(
            @PathVariable("question-id") @Positive long questionId,
            @Valid @RequestBody QuestionPatchDto questionPatchDto) {
       questionPatchDto.setQuestionId(questionId);

        Question question =
                questionService.updateQuestion(questionMapper.questionPatchDtoToQuestion(questionPatchDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(question)),
                HttpStatus.OK);

    }

    @PatchMapping("/{question-id}/votePlus")
    public ResponseEntity patchVoteQPlus(
            @PathVariable("question-id") @Positive long questionId) {
        Question question =
                questionService.findQuestion(questionId);
        Question addedVoteQquestion = questionService.updateVoteQPlus(question);
        VoteQ addedVoteQ = addedVoteQquestion.getVoteQ();
        int voteQcount = addedVoteQ.getVoteQCount();
        String voteQCountJson =
                "{\"" +
                        "" + "voteQCount\": \"" + Integer.toString(voteQcount) + "" +
                        "\"}";;

        return new ResponseEntity<>(voteQCountJson, HttpStatus.OK);
    }
    @PatchMapping("/{question-id}/voteMinus")
    public ResponseEntity patchVoteQMinus(
            @PathVariable("question-id") @Positive long questionId) {
        Question question =
                questionService.findQuestion(questionId);
        Question droppedVoteQquestion = questionService.updateVoteQMinus(question);
        VoteQ droppedVoteQ = droppedVoteQquestion.getVoteQ();
        int voteQcount = droppedVoteQ.getVoteQCount();
        String voteQCountJson =
                "{\"" +
                        "" + "voteQCount\": \"" + Integer.toString(voteQcount) + "" +
                        "\"}";;

        return new ResponseEntity<>(voteQCountJson, HttpStatus.OK);
    }

    @GetMapping("/{question-id}/voteQ")
    public String getVoteQCount(
            @PathVariable("question-id") @Positive long questionId) {

        Question question = questionService.findQuestion(questionId);
        VoteQ voteQ = question.getVoteQ();
        int voteQcount = voteQ.getVoteQCount();
        String voteQCountJson =
                "{\"" + "" +
                        "voteQCount\": \"" + Integer.toString(voteQcount) + "" +
                        "\"}";;

        return voteQCountJson;
    }


    //키워드 검색해서 나오는 questions 리스트 가져오는 거.
    @GetMapping("/search")
    public ResponseEntity searchQuestions(
            @RequestParam(value = "keyword") String keyword, @Positive @RequestParam int page,
            @Positive @RequestParam int size) {

        Page<Question> pageQuestions = questionService.findQuestionsBykeyword(page - 1, size, keyword);
        List<Question> questions = pageQuestions.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(questionMapper.questionsToQuestionResponseDtos(questions),
                        pageQuestions),
                HttpStatus.OK);
    }

    //리스트중 해당 question 딱 하나 가져오는거
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(
            @PathVariable("question-id") @Positive long questionId) {

        Question question = questionService.findQuestion(questionId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(question))
                , HttpStatus.OK);
    }

    //home 에서 questions 리스트 가져오는 거. 최신순? 페이지네이션 공부 후 수정
    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {

        Page<Question> pageQuestions = questionService.findQuestions(page - 1, size);
        List<Question> questions = pageQuestions.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(questionMapper.questionsToQuestionResponseDtos(questions),
                        pageQuestions),
                HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(
            @PathVariable("question-id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}