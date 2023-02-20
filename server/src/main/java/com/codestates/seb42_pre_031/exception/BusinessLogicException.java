package com.codestates.seb42_pre_031.exception;

import lombok.Getter;

// 정식님 코드 가져온 것 후에 수정해야 함
//서비스에서 예외처리시 사용될 예정
public class BusinessLogicException extends RuntimeException {
    @Getter
    private ExceptionCode exceptionCode;

    public BusinessLogicException(ExceptionCode exceptionCode) {
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    }
}
