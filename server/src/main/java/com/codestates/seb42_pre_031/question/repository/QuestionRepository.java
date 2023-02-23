package com.codestates.seb42_pre_031.question.repository;

import com.codestates.seb42_pre_031.member.entity.Member;
import com.codestates.seb42_pre_031.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Long> {

    @Query("SELECT * FROM QUESTION WHERE QUESTION_TITLE OR QUESTION_CONTENTS OR QUESTION_TRIAL LIKE %:keyword% ORDER BY VOTE_Q.VOTE_Q_COUNT DESC")
    Optional<List<Question>> findByKeyword(String keyword);

}
