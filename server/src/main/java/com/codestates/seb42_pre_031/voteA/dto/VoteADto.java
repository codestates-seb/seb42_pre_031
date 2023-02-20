package com.codestates.seb42_pre_031.voteA.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

public class VoteADto {
    @Getter
    @NoArgsConstructor
    public static class Post {
        private int memberId;
        private int answerId;
        private int voteAState;
    }

    @Getter
    @NoArgsConstructor
    public static class response {
        private int voteAId;
        private int memberId;
        private int voteState;
    }
}
