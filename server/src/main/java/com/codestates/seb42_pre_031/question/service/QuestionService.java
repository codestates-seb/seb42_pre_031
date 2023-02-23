package com.codestates.seb42_pre_031.question.service;

import com.codestates.seb42_pre_031.exception.BusinessLogicException;
import com.codestates.seb42_pre_031.exception.ExceptionCode;
import com.codestates.seb42_pre_031.question.entity.Question;
import com.codestates.seb42_pre_031.question.repository.QuestionRepository;
import com.codestates.seb42_pre_031.utils.CustomBeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final CustomBeanUtils<Question> beanUtils;

    public QuestionService(QuestionRepository questionRepository, CustomBeanUtils<Question> beanUtils) {
        this.questionRepository = questionRepository;
        this.beanUtils = beanUtils;
    }

    public Question createQuestion(Question question) {
        //voteQCount 0으로 시작
        question.getVoteQ().setVoteQCount(0);
        return questionRepository.save(question);
    }

    public Question updateQuestion(Question question) {
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());
        //제대로 될진 몰라..
        Question updatedQuesiton = beanUtils.copyNonNullProperties(question, findQuestion);
        return questionRepository.save(updatedQuesiton);
    }

    public Question updateVoteQPlus(Question question) {
        int count = question.getVoteQ().getVoteQCount() + 1;
        question.getVoteQ().setVoteQCount(count);
        return questionRepository.save(question);
    }

    public Question updateVoteQMinus(Question question) {
        int count = question.getVoteQ().getVoteQCount() - 1;
        question.getVoteQ().setVoteQCount(count);
        return questionRepository.save(question);
    }

    public Question findQuestion(long questionId) {
        return findVerifiedQuestion(questionId);
    }

//    @Transactional(readOnly = true)
    public Page<Question> findQuestions(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "voteQ.voteQCount")));
    }

    //???
//    @Transactional(readOnly = true)
    public Page<Question> findQuestionsBykeyword(int page, int size, String keyword) {

        Optional<List<Question>> OptionalQuestions = questionRepository.findAllByKeyword(keyword);

        List<Question> questionList = OptionalQuestions.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        PageRequest pageRequest = PageRequest.of(page, size);

        int start = (int) pageRequest.getOffset();
        int end = Math.min((start + pageRequest.getPageSize()), questionList.size());

        Page<Question> questionPage = new PageImpl<>(questionList.subList(start, end), pageRequest, questionList.size());

        return questionPage;
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