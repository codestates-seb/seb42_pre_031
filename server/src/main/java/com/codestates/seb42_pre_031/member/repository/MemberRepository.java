package com.codestates.seb42_pre_031.member.repository;

import com.codestates.seb42_pre_031.member.entity.Member;
import org.springframework.data.repository.CrudRepository;

public interface MemberRepository extends CrudRepository<Member, Long> {
}
