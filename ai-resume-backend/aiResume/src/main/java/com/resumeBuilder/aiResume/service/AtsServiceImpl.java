    package com.resumeBuilder.aiResume.service;


    import com.resumeBuilder.aiResume.dto.AtsAnalysisResponseDTO;
    import com.resumeBuilder.aiResume.util.PdfTextExtractor;
    import org.springframework.ai.chat.client.ChatClient;
    import org.springframework.ai.chat.prompt.Prompt;
    import org.springframework.core.io.ClassPathResource;
    import org.springframework.stereotype.Service;
    import org.springframework.web.multipart.MultipartFile;
    import com.fasterxml.jackson.databind.ObjectMapper;
    import java.io.IOException;
    import java.nio.file.Files;
    import java.nio.file.Path;
    import java.util.Map;

    @Service

    public class AtsServiceImpl implements AtsService {

        private final PdfTextExtractor pdfTextExtractor;
        private final ChatClient chatClient;

        public AtsServiceImpl(PdfTextExtractor pdfTextExtractor,
                              ChatClient.Builder builder){
            this.pdfTextExtractor = pdfTextExtractor;
            this.chatClient = builder.build();
        }

        @Override
        public AtsAnalysisResponseDTO analyzeResume(
                MultipartFile resume,
                String jobDescription
        ) throws IOException{

            String resumeText = pdfTextExtractor.extractText(resume);

            String promptString = loadPromptFromFile("ats_prompt.txt");

            String promptContent = putValuesTemplate(
                    promptString,
                    Map.of(
                            "resumeText", resumeText,
                            "jobDescription", jobDescription
                    )
            );

            Prompt prompt = new Prompt(promptContent);


            String response = chatClient
                    .prompt(prompt)
                    .call()
                    .content();

            ObjectMapper objectMapper = new ObjectMapper();

            return objectMapper.readValue(
                    cleanJsonResponse(response),
                    AtsAnalysisResponseDTO.class
            );
        }

        private String loadPromptFromFile(String fileName) throws IOException {
            Path path = new ClassPathResource(fileName)
                                    .getFile()
                                    .toPath();
            return Files.readString(path);
        }

        private String putValuesTemplate(String template,
                                         Map<String, String> values
        ) {
            for (Map.Entry<String, String> entry : values.entrySet()) {
                template = template.replace(
                        "{" + entry.getKey() + "}",
                        entry.getValue()
                );
            }
           return template;
        }

        private String cleanJsonResponse(String response) {
            response = response.trim();
            if (response.startsWith("```json")) {
                response = response.substring(7);
            }
            if (response.endsWith("```")) {
                response = response.substring(
                        0,
                        response.length() - 3
                );
            }
            return response.trim();
        }

    }
