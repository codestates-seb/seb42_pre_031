package com.codestates.seb42_pre_031.tag.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
//Builder 애너테이션 왜붙엇냐
@Getter
@Setter
public class TagResponseDto {

    private long tagId;

    private String tagTitle;

}
