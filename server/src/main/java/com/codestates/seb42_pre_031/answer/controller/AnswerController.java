package com.codestates.seb42_pre_031.answer.controller;

import com.codestates.seb42_pre_031.answer.dto.AnswerPatchDto;
import com.codestates.seb42_pre_031.answer.dto.AnswerPostDto;
import com.codestates.seb42_pre_031.answer.entity.Answer;
import com.codestates.seb42_pre_031.answer.mapper.AnswerMapper;
import com.codestates.seb42_pre_031.answer.service.AnswerService;
import com.codestates.seb42_pre_031.member.entity.Member;
import com.codestates.seb42_pre_031.question.entity.Question;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/answer")
public class AnswerController {

    private AnswerService answerService;
    private AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    @PostMapping("/{memebr-id}")
    public ResponseEntity postAnswer(@PathVariable("question-id") int questionId,
                                     @PathVariable("member-id") int memberId,
                                     @RequestBody AnswerPostDto answerPostDto) {

        //TODO : service 구현
        Answer answer = mapper.answerPostDtoToAnswer(answerPostDto);
        answer.setMember(new Member(memberId));
        answer.setQuestion(new Question(questionId));
        answerService.creatAnswer(answer);

        return new ResponseEntity(mapper.answerToAnswerResponseDto(answer), HttpStatus.CREATED);
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchAnswer (@PathVariable("question-id") int questionId,
                                       @PathVariable("answer-id") int answerId,
                                       @RequestBody AnswerPatchDto answerPatchDto) {

        answerPatchDto.setAnswerId(answerId);
        answerPatchDto.setQuestionId(questionId);

        //TODO : service 구현
        Answer answer = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));

        return new ResponseEntity(mapper.answerToAnswerResponseDto(answer), HttpStatus.OK);
    }

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("question-id") int questionId) {

        //TODO : service 구현
        answerService.deleteAnswer(questionId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
