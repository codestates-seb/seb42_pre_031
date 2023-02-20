package com.codestates.seb42_pre_031.member.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

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

    @Column(nullable = false, unique = true)
    private String memberEmail;

    @Column(length = 100, nullable = false)
    private String memberPW;

    @Column(length = 100, nullable = false) //unique=true?
    private String nickName;

    @Column(length = 500, nullable = false)
    private String aboutMe;

}
