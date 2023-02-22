package com.codestates.seb42_pre_031.question.repository;

import com.codestates.seb42_pre_031.question.entity.Question;
import org.springframework.data.repository.CrudRepository;

public interface QuestionRepository extends CrudRepository<Question, Long> {
}
