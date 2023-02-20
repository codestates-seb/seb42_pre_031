package com.codestates.seb42_pre_031.tag.controller;

import com.codestates.seb42_pre_031.tag.dto.TagPatchDto;
import com.codestates.seb42_pre_031.tag.dto.TagPostDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/v1/tags")
@Validated
@Slf4j
public class TagController {

    private final static String TAG_DEFAULT_URL = "/v1/tags";

    @PostMapping
    public ResponseEntity postTag(@RequestBody TagPostDto tagPostDto) {
        //중복여부도 확인
        return new ResponseEntity<TagPostDto>(tagPostDto, HttpStatus.CREATED);
    }

    @PatchMapping("/{tag-id}")
    public ResponseEntity patchTag(
            @PathVariable("tag-id") @Min(0) long tagId,
            @Valid @RequestBody TagPatchDto tagPatchDto) {
       /* tagPatchDto.setTagId(tagId);

        Tag tag =
                tagService.updateTagV2(mapper.tagPatchDtoToTag(tagPatchDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.tagToTagResponseDto(tag)),
                HttpStatus.OK);
         */
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity searchTags(
            @RequestParam(value = "keyword") String keyword ) {

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{tag-id}")
    //키워드 검색 기능 구현 해당 tag 딱 하나 가져오는거
    public ResponseEntity getTag(
            @PathVariable("tag-id") @Min(0) long tagId) {

        /*
        Tag tag = tagService.findTag(tagId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.tagToTagResponseDto(tag))
                , HttpStatus.OK);
*/

        return new ResponseEntity<>(HttpStatus.OK);
    }

    /*

    tag-id로 get하는게 필요한 기능이 있는지 아직 모르겠음
    @GetMapping
    public ResponseEntity getTags(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {


        Page<Tag> pageTags = tagService.findTags(page - 1, size);
        List<Tag> tags = pageTags.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.tagsToTagResponseDtos(tags),
                        pageTags),
                HttpStatus.OK);

        return new ResponseEntity<>(HttpStatus.OK);
    }

     */



    @DeleteMapping("/{tag-id}")
    public ResponseEntity deleteTag(
            @PathVariable("tag-id") @Min(0) long tagId) {
//        tagService.deleteTag(tagId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
