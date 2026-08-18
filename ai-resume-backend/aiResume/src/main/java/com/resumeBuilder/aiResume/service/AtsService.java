package com.resumeBuilder.aiResume.service;

import com.resumeBuilder.aiResume.dto.AtsAnalysisResponseDTO;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface AtsService {
    AtsAnalysisResponseDTO analyzeResume(
            MultipartFile resume,
            String jobDescription
    ) throws IOException;
}
