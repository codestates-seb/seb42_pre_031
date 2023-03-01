package com.codestates.seb42_pre_031.helper.event;

import com.codestates.seb42_pre_031.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Component;

@Slf4j
@EnableAsync
@Component
@RequiredArgsConstructor
public class MemberRegistrationEventListener {
    private final MemberService memberService;

//    private final EmailSender emailSender;
//
//    @Async
//    @EventListener
//    public void listen(MemberRegistrationApplicationEvent event) throws Exception {
//        try {
//            // 전송할 메시지를 생성했다고 가정.
//            String message = "Welcome to our QnA board!";
//            emailSender.sendEmail(message);
//        } catch (MailSendException e) {
//            e.printStackTrace();
//            log.error("MailSendException: rollback for Member Registration:");
//            Member member = event.getMember();
//            memberService.deleteMember(member.getMemberId());
//        }
//    }
}