package com.example.demo;
import java.util.UUID;


public class NumberGenerator {

    public static String generateNumber() {
        UUID uuid = UUID.randomUUID();
        String number = uuid.toString().replace("-", "").substring(0, 10);
        return number;
    }
}