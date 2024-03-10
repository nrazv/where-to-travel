package com.whertotravel.entities.user.mapper;

import com.whertotravel.entities.authentication.models.UserRegisterRequest;
import com.whertotravel.entities.user.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    User userCreateRequestToUser(UserRegisterRequest userRegisterRequest);
}
