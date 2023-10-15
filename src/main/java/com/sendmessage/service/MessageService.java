package com.sendmessage.service;

import com.sendmessage.MessageRepository;
import com.sendmessage.entities.Messages;
import com.sendmessage.payload.mapper.MessageMapper;
import com.sendmessage.payload.request.MessageRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MessageService {

    private final MessageRepository messageRepository;
    private final MessageMapper messageMapper;
    public void save(MessageRequest messageRequest) {
        Messages messages = messageMapper.mapRequestToMessage(messageRequest);
        messageRepository.save(messages);
    }
}
