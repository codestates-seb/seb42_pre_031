package com.codestates.seb42_pre_031.member.controller;


import com.codestates.seb42_pre_031.member.dto.MemberPostDto;
import com.codestates.seb42_pre_031.member.entity.Member;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/v1/members")
@Validated
@Slf4j
public class MemberController {

    private final static String MEMBER_DEFAULT_URL = "/v1/members";

    @PostMapping
    public ResponseEntity postMember(@RequestBody MemberPostDto memberPostDto) {

        return new ResponseEntity<MemberPostDto>(memberPostDto, HttpStatus.CREATED);
    }

}
