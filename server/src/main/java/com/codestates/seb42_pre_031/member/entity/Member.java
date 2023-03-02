package com.codestates.seb42_pre_031.member.entity;

import com.codestates.seb42_pre_031.answer.entity.Answer;
import com.codestates.seb42_pre_031.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long memberId;

    @Column(length = 100, nullable = false)
    private String memberName;

    //unique 애트리뷰트 관련 에러 발생 jpa 엔티티 매핑 단원서.
    //unique = true 즉, email 주소는 고유한 값이어야 하는데, 동일한 email 주소가 INSERT 되면서 JdbcSQLIntegrityConstraintViolationException, ConstraintViolationException, PersistenceException이 래핑되어 순차적으로 전파되었습니다.
    @Column(length = 100, nullable = false, unique = true)
    private String memberEmail;

    @Column(length = 100, nullable = false)
    private String memberPW;

    @Column(length = 100, nullable = false) //unique=true?
    private String nickName;

    @Column(length = 500, nullable = true)
    private String aboutMe;

    @OneToMany(mappedBy = "member", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<Answer> answers = new ArrayList<>();

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    public enum MemberRole {
        ROLE_USER,
        ROLE_ADMIN
    }

    public void setQuestion(Question question) {
        this.questions.add(question);
        if (question.getMember() != this) {
            question.setMember(this);
        }
    }
    public void setAnswer(Answer answer) {
        this.answers.add(answer);
        if (answer.getMember() != this) {
            answer.setMember(this);
        }
    }

}
