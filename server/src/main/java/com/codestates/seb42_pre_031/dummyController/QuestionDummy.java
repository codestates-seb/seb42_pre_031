package com.codestates.seb42_pre_031.dummyController;

import com.codestates.seb42_pre_031.answer.dto.AnswerResponseDto;
import com.codestates.seb42_pre_031.question.dto.QuestionPatchDto;
import com.codestates.seb42_pre_031.question.dto.QuestionPostDto;
import com.codestates.seb42_pre_031.question.dto.QuestionResponseDto;
import com.codestates.seb42_pre_031.question.entity.Question;
import com.codestates.seb42_pre_031.question.mapper.QuestionMapper;
import com.codestates.seb42_pre_031.question.service.QuestionService;
import com.codestates.seb42_pre_031.response.MultiResponseDto;
import com.codestates.seb42_pre_031.response.PageInfo;
import com.codestates.seb42_pre_031.response.SingleResponseDto;
import com.codestates.seb42_pre_031.utils.UriCreator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/v1/questions")
@Validated
@Slf4j
public class QuestionDummy {


    private final static String QUESTION_DEFAULT_URL = "/v1/questions";
    private final QuestionService questionService;
    private final QuestionMapper questionMapper;

    public QuestionDummy(QuestionService questionService, QuestionMapper questionMapper) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
    }

    @PostMapping
    public ResponseEntity postQuestion(@RequestBody QuestionPostDto questionPostDto) {

        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, 1);

        return ResponseEntity.created(location).build();
    }


    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(
            @PathVariable("question-id") @Positive long questionId,
            @Valid @RequestBody QuestionPatchDto questionPatchDto) {

        QuestionResponseDto questionResponseDto = new QuestionResponseDto(1, "Don't know ~~~~", LocalDateTime.now(), "about what~~~~~", "I tried many options like, ~~~~~~", 4, answers1,16);

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionResponseDto),
                HttpStatus.OK);

    }

    @PatchMapping("/{question-id}/votePlus")
    public ResponseEntity patchVoteQPlus(
            @PathVariable("question-id") @Positive long questionId) {
//        Question question =
//                questionService.findQuestion(questionId);
//        Question addedVoteQ = questionService.updateVoteQPlus(question);

        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PatchMapping("/{question-id}/voteMinus")
    public ResponseEntity patchVoteQMinus(
            @PathVariable("question-id") @Positive long questionId) {
//        Question question =
//                questionService.findQuestion(questionId);
//        Question droppedVoteQ = questionService.updateVoteQMinus(question);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{question-id}/voteQ")
    public String getVoteQCount(
            @PathVariable("question-id") @Positive long questionId) {

//        Question question = questionService.findQuestion(questionId);
//        int voteQcount = question.getVoteQ().getVoteQCount();
        String voteQCountJson =
                "{\"" + "voteQCount\": \"" + 12 + "\"}";;

        return voteQCountJson;
    }


    //키워드 검색해서 나오는 questions 리스트 가져오는 거. 최신등록순
    @GetMapping("/search")
    public ResponseEntity searchQuestions(
            @RequestParam("keyword") String keyword, @Positive @RequestParam int page,
            @Positive @RequestParam int size) {

        return new ResponseEntity<>(
                new MultiResponseDto<>(questions,
                        pageInfo),
                HttpStatus.OK);
    }

    //리스트중 해당 question 딱 하나 가져오는거
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(
            @PathVariable("question-id") @Min(0) long questionId) {

        QuestionResponseDto questionResponseDto = new QuestionResponseDto(1, "Don't know ~~~~", LocalDateTime.now(), "about what~~~~~", "I tried many options like, ~~~~~~", 4, answers1, 16);

        return new ResponseEntity<>(
                new SingleResponseDto<>(questionResponseDto),
                HttpStatus.OK);
    }

    //home 에서 questions 리스트 가져오는 거. 최신순
    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size) {

        return new ResponseEntity<>(
                new MultiResponseDto<>(questions,
                        pageInfo),
                HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(
            @PathVariable("question-id") @Positive long questionId) {

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    List<QuestionResponseDto> questions = new ArrayList<>() {
        {
            new QuestionResponseDto(1, "Don't know ~~~~", LocalDateTime.now(), "about what~~~~~", "I tried many options like, ~~~~~~", 4, answers1, 16);

            new QuestionResponseDto(2, "Want to know~~~", LocalDateTime.now(), "Why.. does it work?", "Tried everything, such as ~~~~", 7, answers2, 6);

            new QuestionResponseDto(3, "Somebody help~~ who knows~~", LocalDateTime.now(), "If someone knows about ~~~", "I did everything including ~~~~", 3, answers3, 1);
        }
    };
    List<AnswerResponseDto> answers1 = new ArrayList<>() {
        {
            new AnswerResponseDto(1, 1, 7, "Do it by yourself", 10);
            new AnswerResponseDto(2, 1, 9, "Do it by yourself222", 15);

        }
    };
    List<AnswerResponseDto> answers2 = new ArrayList<>() {
        {
            new AnswerResponseDto(1, 2, 2, "Do it by yourself", 10);
            new AnswerResponseDto(2, 2, 8, "Do it by yourself222", 15);

        }
    };
    List<AnswerResponseDto> answers3 = new ArrayList<>() {
        {
            new AnswerResponseDto(1, 3, 6, "Do it by yourself", 10);
            new AnswerResponseDto(2, 3, 5, "Do it by yourself222", 15);

        }
    };

        PageInfo pageInfo = new PageInfo(1, 3, 3, 1);
}
