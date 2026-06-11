package com.resumeBuilder.aiResume;

import com.resumeBuilder.aiResume.service.ResumeService;
import com.resumeBuilder.aiResume.service.ResumeServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;

@SpringBootTest
class AiResumeApplicationTests {

	@Autowired
	private ResumeService resumeService;

	@Test
	void contextLoads() throws IOException {
		resumeService.generateResumeResponse("I am a java developer with 5 yrs of experience");
	}

}
