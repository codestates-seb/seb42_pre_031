package com.codestates.seb42_pre_031.question.service;

import com.codestates.seb42_pre_031.exception.BusinessLogicException;
import com.codestates.seb42_pre_031.exception.ExceptionCode;
import com.codestates.seb42_pre_031.member.entity.Member;
import com.codestates.seb42_pre_031.member.service.MemberService;
import com.codestates.seb42_pre_031.question.entity.Question;
import com.codestates.seb42_pre_031.question.repository.QuestionRepository;
import com.codestates.seb42_pre_031.utils.CustomBeanUtils;
import com.codestates.seb42_pre_031.voteQ.entity.VoteQ;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final CustomBeanUtils<Question> beanUtils;
    private final MemberService memberService;


    public Question createQuestion(Question question) {
        VoteQ voteQ = new VoteQ();
        voteQ.setVoteQCount(0);
        question.setVoteQ(voteQ);
        Member member = question.getMember();
        memberService.findVerifiedMember(member.getMemberId());
        return questionRepository.save(question);
    }

    public Question updateQuestion(Question question) {
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());
        Question updatedQuesiton = beanUtils.copyNonNullProperties(question, findQuestion);
        return questionRepository.save(updatedQuesiton);

    }

    public Question updateVoteQPlus(Question question) {
        VoteQ voteQ = question.getVoteQ();
        int count = voteQ.getVoteQCount() + 1;
        voteQ.setVoteQCount(count);
        question.setVoteQ(voteQ);
        return questionRepository.save(question);
    }

    public Question updateVoteQMinus(Question question) {
        VoteQ voteQ = question.getVoteQ();
        int count = voteQ.getVoteQCount() - 1;
        voteQ.setVoteQCount(count);
        question.setVoteQ(voteQ);
        return questionRepository.save(question);
    }

    public Question findQuestion(long questionId) {
        return findVerifiedQuestion(questionId);
    }

    @Transactional(readOnly = true)
    public Page<Question> findQuestions(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "voteQ.voteQCount")));
    }

    @Transactional(readOnly = true)
    public Page<Question> findQuestionsBykeyword(int page, int size, String keyword) {

        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "voteQ.voteQCount"));

        Optional<Page<Question>> optionalPage = questionRepository.findByQuestionTitleContainingOrQuestionContentsContainingOrQuestionTrialContaining(keyword, keyword, keyword, pageable);

        Page<Question> findPage =
                optionalPage.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findPage;
//        Optional<List<Question>> OptionalQuestions = questionRepository.findAllByKeyword(keyword);
//
//        List<Question> questionList = OptionalQuestions.orElseThrow(() ->
//                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
//
//        PageRequest pageRequest = PageRequest.of(page, size);
//
//        int start = (int) pageRequest.getOffset();
//        int end = Math.min((start + pageRequest.getPageSize()), questionList.size());
//
//        Page<Question> questionPage = new PageImpl<>(questionList.subList(start, end), pageRequest, questionList.size());
//
//        return questionPage;
//        return null;
    }


    public void deleteQuestion(long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        questionRepository.delete(findQuestion);
    }


    public Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion =
                questionRepository.findById(questionId);
        Question findQuestion =
                optionalQuestion.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }

}