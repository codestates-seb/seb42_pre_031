package com.codestates.seb42_pre_031.answer.repository;

import com.codestates.seb42_pre_031.answer.entity.Answer;
import com.codestates.seb42_pre_031.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
//    Optional<List<Answer>> findByQuestionId(long questionId);
//    @Query(value = "SELECT * FROM ANSWER WHERE QUESTION_ID = :questionId ORDER BY VOTE_A.VOTE_A_COUNT DESC", nativeQuery = true)
     Optional<Page<Answer>> findByQuestionQuestionId(long questionId, Pageable pageable);

}
