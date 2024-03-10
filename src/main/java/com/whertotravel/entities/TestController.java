package com.whertotravel.entities;

import com.whertotravel.config.ApplicationConfig;
import com.whertotravel.entities.image.service.ImageService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(ApplicationConfig.API_V_1 + "file")
public class TestController {
    private final ImageService imageService;

    public TestController(ImageService imageService) {
        this.imageService = imageService;
    }

    @PostMapping
    void saveImg(@RequestParam MultipartFile[] files) {
        imageService.saveAll(files);
    }

    @GetMapping()
    String getTest() {
        return "Test";
    }
}
