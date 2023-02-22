package com.codestates.seb42_pre_031.vote.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class VoteAPostDto {
    private long memberId;
    private long answerId;
    private int voteAValue;
}
