package com.resumeBuilder.aiResume.dto;

import lombok.Data;

import java.util.List;

@Data
public class AtsAnalysisResponseDTO {
    private  int score;
    private String status;
    private List<String> matchedKeywords;
    private List<String> missingKeywords;
    private List<String> suggestions;
    private String overallAssessment;
}
