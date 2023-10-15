package com.sendmessage.payload.response;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;

//DTO
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
public class MessageResponse implements Serializable {

    private String name;
    private String email;
    private String subject;
    private String message;
    private LocalDate date;
}
