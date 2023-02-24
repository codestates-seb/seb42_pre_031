package com.codestates.seb42_pre_031.question.repository;

import com.codestates.seb42_pre_031.member.entity.Member;
import com.codestates.seb42_pre_031.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Long> {

//    @Query(value = "SELECT * FROM QUESTION AS Q WHERE Q.QUESTION_TITLE OR Q.QUESTION_CONTENTS OR Q.QUESTION_TRIAL LIKE %:keyword% LEFT OUTER JOIN VOTE_Q AS V ON Q.QUESTION_ID = V.QUESTION_ID ORDER BY V.VOTE_Q_COUNT DESC", nativeQuery =true)
//    Optional<List<Question>> findAllByKeyword(String keyword);

    //다 똑같은 keyword parameter로 받아내서 questionTitle 또는 questionContents 또는 questionTrail 에서 keyword로 검색하는 쿼리 메서드
    Optional<Page<Question>> findByQuestionTitleContainingOrQuestionContentsContainingOrQuestionTrialContaining(String keyword1, String keyword2, String keyword3, Pageable pageable);

}
