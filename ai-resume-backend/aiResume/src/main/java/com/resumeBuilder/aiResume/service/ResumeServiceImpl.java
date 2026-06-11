package com.resumeBuilder.aiResume.service;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

@Service
public class ResumeServiceImpl implements ResumeService{

    private ChatClient chatClient;

    public ResumeServiceImpl(ChatClient.Builder builder){
        this.chatClient = builder.build();
    }

    @Override
    public Map<String,Object> generateResumeResponse(String userResumeDescription) throws IOException {

        String promptString = this.loadPromptFromPile("resume_prompt.txt");
        String promptContent = this.putValuesTemplate(promptString, Map.of(
            "userDescription",userResumeDescription
        ));

        Prompt prompt = new Prompt(promptContent);

        String response = chatClient.prompt(prompt).call().content();

        Map<String, Object> stringObjectMap = parseResponse(response);


        return stringObjectMap;
    }

    String loadPromptFromPile(String fileName) throws IOException {
        Path path = new ClassPathResource(fileName).getFile().toPath();
        return Files.readString(path);
    }

    String putValuesTemplate(String template, Map<String, String> values){
        for(Map.Entry<String , String> entry : values.entrySet()){
            template = template.replace("{" + entry.getKey() + "}", entry.getValue());
        }
        return template;
    }

    public static Map<String, Object> parseResponse(String response){
        Map<String, Object> jsonResponse = new HashMap<>();
        int jsonStart = response.indexOf("```json") + 7; // Start after ```json
        int jsonEnd = response.lastIndexOf("```");       // End before ```
        if (jsonStart != -1 && jsonEnd != -1 && jsonStart < jsonEnd) {
            String jsonContent = response.substring(jsonStart, jsonEnd).trim();
            try {
                // Convert JSON string to Map using Jackson ObjectMapper
                ObjectMapper objectMapper = new ObjectMapper();
                Map<String, Object> dataContent = objectMapper.readValue(jsonContent, Map.class);
                jsonResponse.put("data", dataContent);
            } catch (Exception e) {
                jsonResponse.put("data", null); // Handle invalid JSON
                System.err.println("Invalid JSON format in the response: " + e.getMessage());
            }
        } else {
            jsonResponse.put("data", null); // Handle missing JSON
        }

        return jsonResponse;
    }


}
