package com.codestates.seb42_pre_031.answer.repository;

import com.codestates.seb42_pre_031.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
