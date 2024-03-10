package com.whertotravel.entities.authentication.models;

public record UserRegisterRequest(
        String firstName,
        String lastName,
        String email,
        String password
) {}
