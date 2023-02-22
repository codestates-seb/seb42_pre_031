package com.codestates.seb42_pre_031.answer.service;

import com.codestates.seb42_pre_031.answer.repository.AnswerRepository;
import com.codestates.seb42_pre_031.member.repository.MemberRepository;
import com.codestates.seb42_pre_031.member.service.MemberService;
import com.codestates.seb42_pre_031.answer.entity.Answer;
import com.codestates.seb42_pre_031.question.service.QuestionService;
import com.fasterxml.classmate.MemberResolver;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AnswerService {
    private AnswerRepository answerRepository;
    private QuestionService questionService;
    private MemberService memberService;

    public AnswerService(AnswerRepository answerRepository, QuestionService questionService,
                            MemberService memberService) {
        this.answerRepository = answerRepository;
        this.questionService = questionService;
        this.memberService = memberService;
    }



    public Answer createAnswer(Answer answer) {
        //voteACount 0으로 시작
        answer.getVoteA().setVoteACount(0);
        answerRepository.save(answer);
        return null;
    }

    public Answer updateAnswer(Answer answer) {

        return null;
    }

    public Answer updateVoteAPlus(Answer answer) {
        int count = answer.getVoteA().getVoteACount() + 1;
        answer.getVoteA().setVoteACount(count);
        answerRepository.save(answer);
        return answer; //null도 상관 없을거 같긴 하지만..
    }

    public Answer updateVoteAMinus(Answer answer) {
        int count = answer.getVoteA().getVoteACount() - 1;
        answer.getVoteA().setVoteACount(count);
        answerRepository.save(answer);
        return answer;
    }

    public Answer findAnswer(long answerId) {
        return null;
    }

    @Transactional(readOnly = true)
    public Page<Answer> findAnswers(int page, int size) {
//        return answerRepository.findAll(PageRequest.of(page, size, Sort.by("answerId").descending()));
        return null;
    }
    public void deleteAnswer(long answerId) {

    }

}
