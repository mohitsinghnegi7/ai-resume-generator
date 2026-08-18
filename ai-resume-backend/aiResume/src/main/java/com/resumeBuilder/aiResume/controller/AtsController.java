package com.resumeBuilder.aiResume.controller;

import com.resumeBuilder.aiResume.dto.AtsAnalysisResponseDTO;
import com.resumeBuilder.aiResume.service.AtsServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("api/v1/ats")
@CrossOrigin("*")
@RequiredArgsConstructor
public class AtsController {

    private final AtsServiceImpl atsService;

    @PostMapping("/analyze")
    public ResponseEntity<AtsAnalysisResponseDTO> analyzeResume(
            @RequestParam("resume")MultipartFile resume,
            @RequestParam("jobDescription") String jobDescription
            ) throws IOException{
        AtsAnalysisResponseDTO responseDTO = atsService.analyzeResume(resume,
                jobDescription);


        return ResponseEntity.ok(responseDTO);
    }
}
