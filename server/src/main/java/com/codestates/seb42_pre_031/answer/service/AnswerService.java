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
import com.codestates.seb42_pre_031.utils.CustomBeanUtils;
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
@RequiredArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final QuestionService questionService;
    private final MemberService memberService;
    private final CustomBeanUtils<Answer> beanUtils;


    public Answer createAnswer(long questionId, Answer answer) {

        VoteA voteA = new VoteA();
        voteA.setVoteACount(0);
        answer.setVoteA(voteA);
        Question findquestion = questionService.findVerifiedQuestion(questionId);
        Member findMember = memberService.findVerifiedMember(answer.getMember().getMemberId());
        answer.setMember(findMember);
        answer.setQuestion(findquestion);

        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
//        Optional.ofNullable(answer.getContents())
//                .ifPresent(content -> findAnswer.setContents(content));
//        Optional.ofNullable(answer.getVoteA())
//                .ifPresent(vote -> findAnswer.setVoteA(vote));
        Answer updatedAnswer = beanUtils.copyNonNullProperties(answer, findAnswer);

//        return answerRepository.save(findAnswer);
        return answerRepository.save(updatedAnswer);
    }

    public Answer updateVoteAPlus(Answer answer) {
        int count = answer.getVoteA().getVoteACount() + 1;
        answer.getVoteA().setVoteACount(count);
        return answerRepository.save(answer);
    }

    public Answer updateVoteAMinus(Answer answer) {
        int count = answer.getVoteA().getVoteACount() - 1;
        answer.getVoteA().setVoteACount(count);
        return answerRepository.save(answer);
    }

    public Answer findAnswer(long answerId) {
        return findVerifiedAnswer(answerId);
    }

    //TODO:
    @Transactional(readOnly = true)
    public Page<Answer> findAnswers(long questionId, int page, int size) {


        Optional<Page<Answer>> optionalPage = answerRepository.findByQuestionQuestionId(questionId, PageRequest.of(page, size, Sort.by("voteA.voteACount").descending()));

        Page<Answer> findPage =
                optionalPage.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findPage;
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
