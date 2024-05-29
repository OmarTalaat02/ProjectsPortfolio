package oit.com.digitalclock;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClockController {
    private final Clock clock = new Clock();

    @GetMapping("/time")
    public String getCurrentTime() {
        return clock.getCurrentTime();
    }
}

