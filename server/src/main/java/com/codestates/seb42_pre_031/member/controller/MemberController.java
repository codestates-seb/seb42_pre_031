package com.codestates.seb42_pre_031.member.controller;


import com.codestates.seb42_pre_031.member.dto.MemberPatchDto;
import com.codestates.seb42_pre_031.member.dto.MemberPostDto;
import com.codestates.seb42_pre_031.member.entity.Member;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/v1/members")
@Validated
@Slf4j
public class MemberController {

    private final static String MEMBER_DEFAULT_URL = "/v1/members";

    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberPostDto memberPostDto) {

        return new ResponseEntity<MemberPostDto>(memberPostDto, HttpStatus.CREATED);
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(
            @PathVariable("member-id") @Min(0) long memberId,
            @Valid @RequestBody MemberPatchDto memberPatchDto) {

        //원래 @Min(0) 대신 @Positive 있었음

        //닉네임 중복 불가인가 중복확인 기능이 있나

       /* memberPatchDto.setMemberId(memberId);

        Member member =
                memberService.updateMemberV2(mapper.memberPatchDtoToMember(memberPatchDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponseDto(member)),
                HttpStatus.OK);*/
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(
            @PathVariable("member-id") @Min(0) long memberId) {
        /*Member member = memberService.findMember(memberId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponseDto(member))
                , HttpStatus.OK);
                */

        return new ResponseEntity<>(HttpStatus.OK);
    }

    /*
    getMembers가 있던가?!!?! 적어도 사용자가 getMembers 할 기능이 없는거 같은데.
    관리자 기능 구현하는건 우리가 없으니까 생략.
    @GetMapping
    public ResponseEntity getMembers(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {

        Page<Member> pageMembers = memberService.findMembers(page - 1, size);

        List<Member> members = pageMembers.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.membersToMemberResponseDtos(members),
                        pageMembers),
                HttpStatus.OK);


        return new ResponseEntity<>(HttpStatus.OK);
    }
    */

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(
            @PathVariable("member-id") @Positive long memberId) {
//        memberService.deleteMember(memberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    //로그아웃 구현 보안 관련해서 복습 하고 해보쟈..
    @GetMapping("/logout/{member-id}?")
    public ResponseEntity getLogout(HttpServletRequest request) {
//        logger.info("logout GET메서드 실행");

        HttpSession session = request.getSession();

        session.invalidate();
    return new ResponseEntity<>(HttpStatus.OK);
    }
 

}
