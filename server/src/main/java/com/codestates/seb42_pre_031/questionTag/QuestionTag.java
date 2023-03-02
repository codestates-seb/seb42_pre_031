package com.codestates.seb42_pre_031.questionTag;

import com.codestates.seb42_pre_031.question.entity.Question;
import com.codestates.seb42_pre_031.tag.entity.Tag;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class QuestionTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionTagId;

    @Column(length = 50, nullable = true)
    private String tagTitle;

    //    questiontag 와 tag 간에 N:1 연관관계 매핑 코드
    @ManyToOne
    @JoinColumn(name = "TAG_ID")
    private Tag tagId;

//    questiontag 와 question 간에 N:1 연관관계 매핑 코드
    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question questionId;

    /*
    public void setTagId(Tag tag) {
        this.tagId = tag;
        if (!this.tagId.getTaggedQuestions().contains(this)) {
            this.tagId.getTaggedQuestions().add(this);
        }
    }
    */

}
