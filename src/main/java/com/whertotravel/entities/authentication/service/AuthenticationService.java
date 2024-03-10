package com.whertotravel.entities.authentication.service;

import com.whertotravel.entities.authentication.models.AuthenticationRequest;
import com.whertotravel.entities.authentication.models.AuthenticationResponse;
import com.whertotravel.entities.authentication.models.UserRegisterRequest;

public interface AuthenticationService {
    AuthenticationResponse register(UserRegisterRequest request);

    AuthenticationResponse authenticate(AuthenticationRequest request);

}
