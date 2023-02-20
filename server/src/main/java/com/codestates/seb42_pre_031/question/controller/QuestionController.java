package com.codestates.seb42_pre_031.question.controller;

import com.codestates.seb42_pre_031.question.dto.QuestionPatchDto;
import com.codestates.seb42_pre_031.question.dto.QuestionPostDto;
import com.codestates.seb42_pre_031.question.entity.Question;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/v1/questions")
@Validated
@Slf4j
public class QuestionController {

    private final static String QUESTION_DEFAULT_URL = "/v1/questions";

    @PostMapping
    public ResponseEntity postQuestion(@RequestBody QuestionPostDto questionPostDto) {

        return new ResponseEntity<QuestionPostDto>(questionPostDto, HttpStatus.CREATED);
    }

    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(
            @PathVariable("question-id") @Min(0) long questionId,
            @Valid @RequestBody QuestionPatchDto questionPatchDto) {
       /* questionPatchDto.setQuestionId(questionId);

        Question question =
                questionService.updateQuestionV2(mapper.questionPatchDtoToQuestion(questionPatchDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)),
                HttpStatus.OK);
         */
        return new ResponseEntity<>(HttpStatus.OK); //response dto
    }

    //키워드 검색해서 나오는 questions 리스트 가져오는 거. 이건 view 순
    @GetMapping("/search")
    public ResponseEntity searchQuestions(
            @RequestParam(value = "keyword") String keyword) {

        return new ResponseEntity<>(HttpStatus.OK);
    }

    //키워드 검색해서 해당 question 딱 하나 가져오는거
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(
            @PathVariable("question-id") @Min(0) long questionId) {

        /*
        Question question = questionService.findQuestion(questionId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question))
                , HttpStatus.OK);
*/

        return new ResponseEntity<>(HttpStatus.OK);
    }

    //home 에서 questions 리스트 가져오는 거. 최신순? 페이지네이션 공부 후 수정
    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        /*
        Page<Question> pageQuestions = questionService.findQuestions(page - 1, size);
        List<Question> questions = pageQuestions.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponseDtos(questions),
                        pageQuestions),
                HttpStatus.OK);
         */
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(
            @PathVariable("question-id") @Min(0) long questionId) {
//        questionService.deleteQuestion(questionId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}