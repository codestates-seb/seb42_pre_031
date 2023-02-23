package com.codestates.seb42_pre_031.member.mapper;

import com.codestates.seb42_pre_031.member.dto.MemberPatchDto;
import com.codestates.seb42_pre_031.member.dto.MemberPostDto;
import com.codestates.seb42_pre_031.member.dto.MemberResponseDto;
import com.codestates.seb42_pre_031.member.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    Member memberPostDtoToMember(MemberPostDto memberPostDto);

    Member memberPatchDtoToMember(MemberPatchDto memberPatchDto);

    MemberResponseDto memberToMemberResponseDto(Member member);

    List<MemberResponseDto> membersToMemberResponseDtos(List<Member> members);

}
