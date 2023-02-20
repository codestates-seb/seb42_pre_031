package com.codestates.seb42_pre_031.voteA.controller;

import com.codestates.seb42_pre_031.voteA.dto.VoteADto;
import com.codestates.seb42_pre_031.voteA.dto.VoteAPatchDto;
import com.codestates.seb42_pre_031.voteA.dto.VoteAPostDto;
import com.codestates.seb42_pre_031.voteA.mapper.VoteAMapper;
import com.codestates.seb42_pre_031.voteA.service.VoteAService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/answers/vote")
@RequiredArgsConstructor
@CrossOrigin
public class VoteAController {
    private VoteAService voteAService;
    private VoteAMapper  mapper;

    public VoteAController voteAController(VoteAService voteAService, VoteAMapper voteAMapper) {
        this.voteAService = voteAService;
        this.mapper       = mapper;
    }

    @PostMapping("/voteA")
    public ResponseEntity postUpVote(@RequestBody VoteAPostDto requestBody) {
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PatchMapping("/voteA")
    public ResponseEntity patchUpVote(@RequestBody VoteAPatchDto requestBody) {
        return new ResponseEntity(HttpStatus.OK);
    }

}
