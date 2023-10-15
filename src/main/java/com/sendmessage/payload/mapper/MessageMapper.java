package com.sendmessage.payload.mapper;

import com.sendmessage.entities.Messages;
import com.sendmessage.payload.request.MessageRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class MessageMapper {

    public Messages mapRequestToMessage(MessageRequest messageRequest){
        return Messages.builder()
                .name(messageRequest.getName())
                .email(messageRequest.getEmail())
                .subject(messageRequest.getSubject())
                .message(messageRequest.getMessage())
                .build();
    }
}
