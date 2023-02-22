package com.codestates.seb42_pre_031.vote.controller;

import com.codestates.seb42_pre_031.vote.dto.VoteAPatchDto;
import com.codestates.seb42_pre_031.vote.dto.VoteAPostDto;
import com.codestates.seb42_pre_031.vote.mapper.VoteAMapper;
import com.codestates.seb42_pre_031.vote.service.VoteAService;
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

    public VoteAController(VoteAService voteAService, VoteAMapper mapper) {
        this.voteAService = voteAService;
        this.mapper = mapper;
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
