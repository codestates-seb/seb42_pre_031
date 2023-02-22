package com.codestates.seb42_pre_031.dummyController;

import com.codestates.seb42_pre_031.member.Mapper.MemberMapper;
import com.codestates.seb42_pre_031.member.dto.MemberPatchDto;
import com.codestates.seb42_pre_031.member.dto.MemberPostDto;
import com.codestates.seb42_pre_031.member.entity.Member;
import com.codestates.seb42_pre_031.member.service.MemberService;
import com.codestates.seb42_pre_031.response.SingleResponseDto;
import com.codestates.seb42_pre_031.utils.UriCreator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;
import java.net.URI;

@RestController
@RequestMapping("/v1/members")
@Validated
@Slf4j
public class MemberDummy {

    private final static String MEMBER_DEFAULT_URL = "/v1/members";
    private final MemberMapper memberMapper;

    public MemberDummy(MemberMapper memberMapper) {
        this.memberMapper = memberMapper;
    }


    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberPostDto memberPostDto) {

        URI location = UriCreator.createUri(MEMBER_DEFAULT_URL, 1L);

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(
            @PathVariable("member-id") @Positive long memberId,
            @Valid @RequestBody MemberPatchDto memberPatchDto) {

        memberPatchDto.setMemberId(memberId);


        Member member = memberMapper.memberPatchDtoToMember(memberPatchDto);
        member.setMemberEmail("abcde@gmail.com");
        return new ResponseEntity<>(
                new SingleResponseDto<>(memberMapper.memberToMemberResponseDto(member)),
                HttpStatus.OK);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(
            @PathVariable("member-id") @Min(0) long memberId) {
        Member member = new Member();
        member.setMemberId(memberId);
        member.setMemberName("이혜인");
        member.setMemberEmail("abcde@gmail.com");
        member.setMemberPW("abcdefg");
        member.setNickName("back-end Developer");
        member.setAboutMe("Back-end Developer. Want to learn about ~. Try my best to post a qualified questions and answers. Contact me by ~");

        return new ResponseEntity<>(
                new SingleResponseDto<>(memberMapper.memberToMemberResponseDto(member))
                , HttpStatus.OK);

    }


    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(
            @PathVariable("member-id") @Positive long memberId) {

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}