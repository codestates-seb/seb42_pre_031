package com.codestates.seb42_pre_031.question.service;

import com.codestates.seb42_pre_031.question.entity.Question;
import com.codestates.seb42_pre_031.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question createQuestion(Question question) {
        //voteQCount 0으로 시작
        question.getVoteQ().setVoteQCount(0);
        questionRepository.save(question);
        return null;
    }

    public Question updateQuestion(Question question) {
        return null;
    }

    public Question updateVoteQPlus(Question question) {
        int count = question.getVoteQ().getVoteQCount() + 1;
        question.getVoteQ().setVoteQCount(count);
        questionRepository.save(question);
        return question; //null도 상관 없을거 같긴 하지만..
    }

    public Question updateVoteQMinus(Question question) {
        int count = question.getVoteQ().getVoteQCount() - 1;
        question.getVoteQ().setVoteQCount(count);
        questionRepository.save(question);
        return question;
    }

    public Question findQuestion(long questionId) {
        return null;
    }

    @Transactional(readOnly = true)
    public Page<Question> findQuestions(int page, int size) {
//        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("questionId").descending()));
        return null;
    }
    public void deleteQuestion(long questionId) {

    }
}