package com.codestates.seb42_pre_031.voteA.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class VoteAPatchDto {
    private long memberId;
    private long answerId;
    private int voteAValue;
}
