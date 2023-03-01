package com.codestates.seb42_pre_031.answer.entity;
import com.codestates.seb42_pre_031.audit.Auditable;
import com.codestates.seb42_pre_031.member.entity.Member;
import com.codestates.seb42_pre_031.question.entity.Question;
import com.codestates.seb42_pre_031.voteA.entity.VoteA;
import com.codestates.seb42_pre_031.voteQ.entity.VoteQ;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

/**
 * <p> * @EntityListeners(class_name.claa) : 설정된 도메인의 값이 변경됐 때를 체크한다.</p>
 * <p> * @EntityListeners(AuditingEntityListener.class) : 값이 변경됐을 시 자동으로 기록한다.</p>
 * <p>* @MappedSuperclass</p>
 * <p>* @CreatedDate : Entity 생성 저장 시간 자동 저장</p>
 * <p>* @LasModifiedDate : Entity 값 변경시 시간 자동 저장</p>
 *<p></p>
 * <p>* @GeneratedValue : Entity의 Primary Key를 생성해주는 기능</p>
 * <p>* @Column(columnDefinition = "") : 특정 필드의 타입을 지정해 데이터를 추출한다.</p>
 *<p></p>
 *<p>* @Enumerated : enum name 그대로 DB에 저장한다.</p>
 *<p>* @Enumerated(EnumType.STRING) : 문자열 자체 저장</p>
 */

@NoArgsConstructor
// @AllArgsConstructor
@Getter
@Setter  // @Setter(AccessLevel.NONE) 접근수준을 생성하지 않는다(?)
@Entity
public class Answer extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 기본 키 생성을 DB에 위임한다.
    private long answerId;

    @Column(columnDefinition = "TEXT", nullable = false) // ✅TEXT -> CONTENTS?
    private String contents;

    /**
     * <p>
     *     <b>지연로딩 발생시 -> @ManyToOne(fech = FetchType.LAZY) </b>
     * </p>
     * <p>단순 Answer 조회시 Member도 함께 조회되야 되는가?</p>
     * <p></p>
     * : 비지니스 로직에서 단순 Answer 로직만 사용하는데 함께 조회시 발생하는 지연로딩에 대해서 JPA의 LAZY를 사용해 프록시로 조회하는 방법으로 해결한다.
     */

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    /**
     * <p>하나의 게시물에서 누를 수 있는 답변 추천수는 여러개이다.</p>
     * <p>해당 답변이 삭제될시 추천 역시 사라지게된다. </p>
     */
    @OneToOne(mappedBy = "answer", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private VoteA voteA;

    public void setMember(Member member) {
        this.member = member;
        if (!this.member.getAnswers().contains(this)){
            this.member.getAnswers().add(this);
        }
    }

    public void setQuestion(Question question) {
        this.question = question;
        if (!this.question.getAnswerList().contains(this)){
            this.question.getAnswerList().add(this);
        }
    }

    public void setVoteA(VoteA voteA) {
        this.voteA = voteA;
        if (voteA.getAnswer() != this) {
            voteA.setAnswer(this);
        }
    }
}


    /*private void setQuestion(Question question) {
        this.question = question;

        // 후에 Question 엔티티의 @OneToOne 매핑
        if (this.question.getAnswer() != this) {
            this.question.setAnswer(this);
        }
    }
    // decideContentOpenStatus 검토

    // VoteA 매핑
    public void setVoteA(VoteA voteA) {
        this.voteA.add(voteA);
        if(voteA.getAnswer() != this) {
            voteA.setVoteA(this);
        }
    }*/
