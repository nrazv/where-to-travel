package com.whertotravel.entities.user.service;

import com.whertotravel.entities.authentication.models.UserRegisterRequest;
import com.whertotravel.entities.user.mapper.UserMapper;
import com.whertotravel.entities.user.model.User;
import com.whertotravel.entities.user.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, UserMapper userMapper, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.passwordEncoder = passwordEncoder;
    }


    @Override
    public User saveNewUser(UserRegisterRequest userRegisterRequest) {
        var user = userMapper.userCreateRequestToUser(userRegisterRequest);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }
}
