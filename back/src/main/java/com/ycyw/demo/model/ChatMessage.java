package com.ycyw.demo.model;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class ChatMessage {
    private String sender;
    private String content;
    private String timestamp;
}
