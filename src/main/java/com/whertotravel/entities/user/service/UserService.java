package com.whertotravel.entities.user.service;


import com.whertotravel.entities.authentication.models.UserRegisterRequest;
import com.whertotravel.entities.user.model.User;

import java.util.List;

public interface UserService {
    User saveNewUser(UserRegisterRequest user);

    List<User> getAll();
}
