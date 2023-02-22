package com.codestates.seb42_pre_031.dummyController;

import com.codestates.seb42_pre_031.answer.dto.AnswerDto;
import com.codestates.seb42_pre_031.answer.entity.Answer;
import com.codestates.seb42_pre_031.answer.mapper.AnswerMapper;
//import com.codestates.seb42_pre_031.answer.service.AnswerService;
import com.codestates.seb42_pre_031.member.entity.Member;
import com.codestates.seb42_pre_031.answer.entity.Answer;
import com.codestates.seb42_pre_031.response.MultiResponseDto;
import com.codestates.seb42_pre_031.response.PageInfo;
import com.codestates.seb42_pre_031.response.SingleResponseDto;
import com.codestates.seb42_pre_031.utils.UriCreator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/v1")
//@RequiredArgsConstructor
@Slf4j
@Validated
public class AnswerDummy {

    private final static String ANSWER_DEFAULT_URL = "/v1";
    private final AnswerMapper mapper;
    public AnswerDummy(AnswerMapper mapper) {
        this.mapper = mapper;
    }
    //private final AnswerService answerService;

    @PostMapping("questions/{question-id}/answers")
    public ResponseEntity postAnswer (@PathVariable("question-id") long questionId, @Valid @RequestBody AnswerDto.Post requestBody) {
        URI location = UriCreator.createUri(ANSWER_DEFAULT_URL+"/answers", 1);

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/answers/{answer-id}")
    public ResponseEntity patchAnswer (@PathVariable("answer-id")  long answerId,
                                      @Valid @RequestBody AnswerDto.Patch requestBody) {


        return new ResponseEntity<>(
                new SingleResponseDto<>(new AnswerDto.Response(1, 1, 5, "Do it by yourself", 10)), HttpStatus.OK);
    }

    @PatchMapping("/answers/{answer-id}/votePlus")
    public ResponseEntity patchVoteAPlus(
            @PathVariable("answer-id") @Positive long answerId) {
//        Answer answer =
//                answerService.findAnswer(answerId);
//        Answer addedVoteA = answerService.updateVoteAPlus(answer);

        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PatchMapping("/{answer-id}/voteMinus")
    public ResponseEntity patchVoteAMinus(
            @PathVariable("answer-id") @Positive long answerId) {
//        Answer answer =
//                answerService.findAnswer(answerId);
//        Answer droppedVoteA = answerService.updateVoteAMinus(answer);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/answers/{answer-id}/voteA")
    public String getVoteACount(
            @PathVariable("answer-id") @Positive long answerId) {

//        Answer answer = answerService.findAnswer(answerId);
//        int voteAcount = answer.getVoteA().getVoteACount();
        String voteACountJson =
                "{\"" + "voteACount\": \"" + 12 + "\"}";;

        return voteACountJson;
    }

    @GetMapping("/answers")
    public ResponseEntity getAnswers(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size) {

        List<AnswerDto.Response> Answers = new ArrayList<>() {
            {
                new AnswerDto.Response(1, 1, 5, "Do it by yourself", 10);
                new AnswerDto.Response(2,1, 8, "Do it by yourself222", 3);
                new AnswerDto.Response(3,1,2, "Do it by yourself333",7);
            }
        };

        PageInfo pageInfo = new PageInfo(1, 3, 3, 1);

        return new ResponseEntity<>(
                new MultiResponseDto<>(Answers,
                        pageInfo),
                HttpStatus.OK);
    }


    @DeleteMapping("/answers/{answer-id}")
    public ResponseEntity deleteAnswer (@PathVariable("answer-id") long answerId) {

        //answerService.deleteAnswer(answerId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}