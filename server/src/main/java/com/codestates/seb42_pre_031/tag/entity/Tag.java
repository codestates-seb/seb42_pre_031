package com.codestates.seb42_pre_031.tag.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tagId;

    @Column(length = 50, nullable = true)
    private String tagTitle;

    @Column
    private int tagCount;

    public Tag(long tagId, String tagTitle) {
        this.tagId = tagId;
        this.tagTitle = tagTitle;
    }

    /* 엔티티 매핑단계서 더 완성하기
    @OneToMany(mappedBy = "tag", cascade = CascadeType.PERSIST)
    private List<QuestionTag> taggedQuestions= new ArrayList<>();
    */

}
