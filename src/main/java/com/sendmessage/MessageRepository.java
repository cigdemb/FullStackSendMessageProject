package com.sendmessage;

import com.sendmessage.entities.Messages;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Messages, Integer> {
}
