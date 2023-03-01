package com.codestates.seb42_pre_031.voteQ.entity;

import com.codestates.seb42_pre_031.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.web.JsonPath;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class VoteQ {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long voteQId;


    @Column(nullable = false)
    private int voteQCount;

    @OneToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    public void setQuestion(Question question) {
        this.question = question;
        if(question.getVoteQ() != this) {
            question.setVoteQ(this);
        }
    }
}
