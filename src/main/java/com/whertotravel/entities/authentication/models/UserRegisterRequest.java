package com.whertotravel.entities.authentication.models;

public record UserRegisterRequest(
        String firstname,
        String lastname,
        String email,
        String password
) {

}
