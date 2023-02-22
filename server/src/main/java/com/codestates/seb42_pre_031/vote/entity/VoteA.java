package com.codestates.seb42_pre_031.vote.entity;

import com.codestates.seb42_pre_031.answer.entity.Answer;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

/**
 * <p>좋아요(추천) 기능에 로그인한 유저(등록된 유저)가 좋아요를 누른 건지 확인 필요</p>
 * <p>check 1) 비로그인 = 비회원은 좋아요를 못 누른다. ➡️ HttpSession 연관 체크</p>
 * <p>check 2) memberId 연관관계 필요</p>
 * <p>check 3) Repository에 회원 데이터가 존재하는지 확인</p>
 */
@NoArgsConstructor
@Getter
@Setter
@Entity
public class VoteA {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long voteAId;

    @Column(nullable = false)
    private int voteACount;

    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;
}


