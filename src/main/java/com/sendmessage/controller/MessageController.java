package com.sendmessage.controller;


import com.sendmessage.payload.request.MessageRequest;
import com.sendmessage.service.MessageService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/app/contactMessages")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class MessageController {

    private final MessageService messageService;


    @PostMapping(value= "/save",  consumes = {"application/json"}, produces = "application/json")
    public ResponseEntity<Map<String,String>> save(@RequestBody @Valid MessageRequest messageRequest) {


        messageService.save(messageRequest);
        Map<String,String> map = new HashMap<>();
        map.put("message", "Message is send successfully");
        map.put("status", "true");
        return new ResponseEntity<>(map, HttpStatus.OK);
    }
}
