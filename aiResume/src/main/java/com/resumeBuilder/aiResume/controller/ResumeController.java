package com.resumeBuilder.aiResume.controller;


import com.resumeBuilder.aiResume.dto.ResumeGenerateRequestDTO;
import com.resumeBuilder.aiResume.service.ResumeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
@RequestMapping("/api/v1/resume")
public class ResumeController {
    private final ResumeService resumeService;

    @PostMapping("/generate")
    public ResponseEntity<Map<String,Object>> generateResume(@RequestBody ResumeGenerateRequestDTO resumeGenerateRequestDTO) throws IOException {
        Map<String, Object> stringObjectMap = resumeService.generateResumeResponse(resumeGenerateRequestDTO.getUserDescription());
        return ResponseEntity.ok(stringObjectMap);
    }
}
