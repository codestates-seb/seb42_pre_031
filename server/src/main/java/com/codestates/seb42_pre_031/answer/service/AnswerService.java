package com.codestates.seb42_pre_031.answer.service;

import com.codestates.seb42_pre_031.answer.repository.AnswerRepository;
import com.codestates.seb42_pre_031.question.entity.Question;
import com.fasterxml.classmate.MemberResolver;
import org.springframework.stereotype.Service;

@Service
public class AnswerService {
    private AnswerRepository answerRepository;
    private QuestionRepository questionRepository;
    private MemberRepository memberRepository;

    public AnswerRepository(AnswerRepository answerRepository, QuestionRepository questionRepository,
                            MemberRepository memberRepository) {
        this.answerRepository = answerRepository;
        this.questionRepository = questionRepository;
        this.memberRepository = memberRepository;
    }

    // createAnswer

}
