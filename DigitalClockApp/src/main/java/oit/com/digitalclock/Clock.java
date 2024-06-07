package oit.com.digitalclock;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class Clock {
    private static final DateTimeFormatter TIME_FORMATTER = DateTimeFormatter.ofPattern("HH:mm:ss");

    public String getCurrentTime() {
        return LocalTime.now().format(TIME_FORMATTER);
    }
}

