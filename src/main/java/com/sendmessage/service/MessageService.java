package com.sendmessage.service;

import com.sendmessage.MessageRepository;
import com.sendmessage.entities.Messages;
import com.sendmessage.payload.mapper.MessageMapper;
import com.sendmessage.payload.request.MessageRequest;
import com.sendmessage.payload.response.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MessageService {

    private final MessageRepository messageRepository;
    private final MessageMapper messageMapper;
    public void save(MessageRequest messageRequest) {
        Messages messages = messageMapper.mapRequestToMessage(messageRequest);
        messageRepository.save(messages);
    }

    public List<MessageResponse> getAll() {
        return messageRepository.findAll().stream().map(messageMapper::mapMessageToMessageResponse)
                .collect(Collectors.toList());
    }
}
