package com.codestates.seb42_pre_031.voteQ.entity;

import com.codestates.seb42_pre_031.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.web.JsonPath;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
public class VoteQ {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long voteId;

    /* 1:1 양방향 관계 매핑시
    외래키 기준 연관관계의 주 -> @JoinColumn을 넣어준다.
    반대편에는 mappedBy를 적용시켜준다.*/
    @OneToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @Column(nullable = false )
    private int voteQCount;
}
