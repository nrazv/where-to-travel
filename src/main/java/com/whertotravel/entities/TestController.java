package com.whertotravel.entities;

import com.whertotravel.config.Config;
import com.whertotravel.entities.image.service.ImageService;
import org.apache.logging.log4j.util.TriConsumer;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(Config.API_V_1 + "file")
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
    String getTest(){
        return  "Test";
    }
}
