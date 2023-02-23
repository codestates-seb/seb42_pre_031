package com.codestates.seb42_pre_031.answer.service;

import com.codestates.seb42_pre_031.answer.repository.AnswerRepository;
import com.codestates.seb42_pre_031.exception.BusinessLogicException;
import com.codestates.seb42_pre_031.exception.ExceptionCode;
import com.codestates.seb42_pre_031.member.entity.Member;
import com.codestates.seb42_pre_031.member.service.MemberService;
import com.codestates.seb42_pre_031.answer.entity.Answer;
import com.codestates.seb42_pre_031.question.entity.Question;
import com.codestates.seb42_pre_031.question.repository.QuestionRepository;
import com.codestates.seb42_pre_031.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AnswerService {
    private AnswerRepository  answerRepository;

    //private QuestionRepository questionRepository;

    private QuestionService questionService;

    private MemberService memberService;


    /*public AnswerService(AnswerRepository answerRepository, QuestionRepository questionRepository,
                            MemberRepository memberSRepository) {
        this.answerRepository = answerRepository;
        this.questionRepository = questionRepository;
        this.memberRepository = memberSRepository;
    }*/

    /*memberService.findMember(Answer.getMember().getMemberId());
    questionService.findQuestion(Answer.getQuestion().getQuestionId());
    Question question = questionService.findQuestion(Answer.getQuestion().getQuestionId());
    }*/


    public Answer createAnswer(Answer answer) {
        //voteACount 0으로 시작
        Member member = memberService.findMember(answer.getMember().getMemberId());
        Question question = questionService.findVerifiedQuestion(answer.getQuestion().getQuestionId());
        answer.setQuestion(question);
        answer.getVoteA().setVoteACount(0);

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
    public Page<Answer> findAnswers(int page, int size) {
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
