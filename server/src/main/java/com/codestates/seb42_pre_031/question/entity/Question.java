package com.codestates.seb42_pre_031.question.entity;

import com.codestates.seb42_pre_031.answer.entity.Answer;
import com.codestates.seb42_pre_031.audit.Auditable;
import com.codestates.seb42_pre_031.member.entity.Member;
import com.codestates.seb42_pre_031.vote.entity.VoteA;
import com.codestates.seb42_pre_031.voteQ.entity.VoteQ;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * <p>* 'cascade' ➡ @OneToMany, @ManyToOne 애트리뷰트
 * <p> 특정 엔티티에 대해 특정 작업 수행시 관련된 엔티티에도 동일한 작업을 수행한다.</p>
 * <p></p>
 * <p>CascasdeType.PERSIST : 하위 엔티티까지 영속성 전달  ➡ A 엔티티 저장시 B도 저장</p>
 * <p>CascadeType.MERGE : 하위 엔티티까지 병합 작업 지속  ➡ 연관 엔티티 모두 병합
 * <p>CascadeType.REMOVE : 하위 엔티티까지 제거 작업 지속 ➡ 연관 엔티티까지 모두 제거</p>
 *
 */

@NoArgsConstructor
//@AllArgsConstructor
@Getter
@Setter
@Entity
public class Question extends Auditable {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;

    @Column(length = 200, nullable = false)
    private String questionTitle;

    // Column(columnDefinition = "") : 특정 필드의 타입을 지정해 데이터를 추출한다.
    @Column(columnDefinition = "TEXT", nullable = false)
    private String questionContents;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String questionTrial;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    /* 하나의 질문에 등록가능한 답변 수는 여러개이다.
    해당 질문이 삭제될시 등록된 답변들 역시 사라지게된다.*/
    @OneToMany(mappedBy = "question", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<Answer> answerList = new ArrayList<>();

    /* 질문에서 누를 수 있는 추천은 하나이다. qustion과 voteq 1:1 양방향 매핑시킨다.
       answer과 voteA의 경우 등록된 답변들당 하나씩 추천을 누를 수 있는 구조로 N:1을 매핑을 사용한다.*/
    @OneToOne(mappedBy = "question", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private VoteQ voteQ;

    // @Enumerated(value = EnumType.STRING) : enum 값을 index가 아닌 텍스트 값 그대로 저장
   /* @Enumerated(value = EnumType.STRING)
    private QuestionStatus questionStatus = QuestionStatus.QUESTION_REGISTRATION;*/

//    @Column(columnDefinition = "integer default 0", nullable = false) // 수정됨
//    private long questionView;
}

    /*public enum QuestionStatus {
        QUESTION_REGISTRATION("질문 등록"),
        QUESTION_ANSWERED("답변 완료"),
        QUESTION_DELETE("질문 삭제");

        @Getter
        private String status;

        QuestionStatus(String status) {
            this.status = status;
        }
    }*/

