package com.codestates.seb42_pre_031.response;

import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
public class MultiResponseDto<T> {
    private List<T> data;
    private PageInfo pageInfo;


    //임시로 Page page->PageInfo pageInfo로 바꾸기. for api
    public MultiResponseDto(List<T> data, PageInfo pageInfo) {
        this.data = data;
//        this.pageInfo = new PageInfo(page.getNumber() + 1,
//                page.getSize(), page.getTotalElements(), page.getTotalPages());

        this.pageInfo = new PageInfo(pageInfo.getPage(), pageInfo.getSize(), pageInfo.getTotalElements(), pageInfo.getTotalPages());
    }
}
