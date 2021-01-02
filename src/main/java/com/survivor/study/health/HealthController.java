package com.survivor.study.health;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/api/health-check")
    public Long healthCheck() {
        return System.currentTimeMillis();
    }

}
