package com.whertotravel.entities.user.controller;

import com.whertotravel.config.ApplicationConfig;
import com.whertotravel.entities.authentication.models.UserRegisterRequest;
import com.whertotravel.entities.user.model.User;
import com.whertotravel.entities.user.service.UserServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(ApplicationConfig.API_V_1 + "user")
public class UserController {
    private final UserServiceImpl userService;

    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @PostMapping
    void saveUser(@RequestBody UserRegisterRequest userRegisterRequest) {
        var savedUser = userService.saveNewUser(userRegisterRequest);
    }

    @GetMapping("/all")
    List<User> getAll() {
        return userService.getAll();
    }

}
