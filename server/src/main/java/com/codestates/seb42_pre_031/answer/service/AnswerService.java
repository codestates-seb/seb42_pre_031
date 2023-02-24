package com.codestates.seb42_pre_031.answer.service;

import com.codestates.seb42_pre_031.answer.repository.AnswerRepository;
import com.codestates.seb42_pre_031.exception.BusinessLogicException;
import com.codestates.seb42_pre_031.exception.ExceptionCode;
import com.codestates.seb42_pre_031.member.entity.Member;
import com.codestates.seb42_pre_031.member.repository.MemberRepository;
import com.codestates.seb42_pre_031.member.service.MemberService;
import com.codestates.seb42_pre_031.answer.entity.Answer;
import com.codestates.seb42_pre_031.question.entity.Question;
import com.codestates.seb42_pre_031.question.service.QuestionService;
import com.codestates.seb42_pre_031.voteA.entity.VoteA;
import com.codestates.seb42_pre_031.voteQ.entity.VoteQ;
import com.fasterxml.classmate.MemberResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final QuestionService questionService;
    private final MemberService memberService;

    @Autowired
    public AnswerService(AnswerRepository answerRepository, QuestionService questionService, MemberService memberService) {
        this.answerRepository = answerRepository;
        this.questionService = questionService;
        this.memberService = memberService;
    }

    public Answer createAnswer(Answer answer) {
        //voteACount 0으로 시작
        Member member = memberService.findMember(answer.getMember().getMemberId());
        Question question = questionService.findVerifiedQuestion(answer.getQuestion().getQuestionId());
        answer.setQuestion(question);
        VoteA voteA = new VoteA();
        voteA.setVoteACount(0);
        answer.setVoteA(voteA);

        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
        Optional.ofNullable(answer.getContents())
                .ifPresent(content -> findAnswer.setContents(content));
        Optional.ofNullable(answer.getVoteA())
                .ifPresent(vote -> findAnswer.setVoteA(vote));

        return answerRepository.save(findAnswer);
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
        return answerRepository.findById(answerId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
    }

    //TODO:
    @Transactional(readOnly = true)
    public Page<Answer> findAnswers(long memberId, int page, int size) {
        return answerRepository.findAll(PageRequest.of(page, size, Sort.by("answerId").descending()));
    }

    public void deleteAnswer(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        answerRepository.delete(findAnswer);
    }

    public Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }
}
