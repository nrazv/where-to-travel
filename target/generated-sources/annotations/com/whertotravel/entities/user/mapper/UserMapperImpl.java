package com.whertotravel.entities.user.mapper;

import com.whertotravel.entities.authentication.models.UserRegisterRequest;
import com.whertotravel.entities.user.model.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-03-10T10:20:38+0100",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.9 (Oracle Corporation)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User userCreateRequestToUser(UserRegisterRequest userRegisterRequest) {
        if ( userRegisterRequest == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        user.firstname( userRegisterRequest.firstname() );
        user.lastname( userRegisterRequest.lastname() );
        user.email( userRegisterRequest.email() );
        user.password( userRegisterRequest.password() );

        return user.build();
    }
}
