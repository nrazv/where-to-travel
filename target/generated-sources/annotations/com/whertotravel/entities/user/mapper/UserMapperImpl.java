package com.whertotravel.entities.user.mapper;

import com.whertotravel.entities.user.model.User;
import com.whertotravel.entities.user.model.UserCreateRequest;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-09-09T16:34:54+0200",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.2 (Oracle Corporation)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User userCreateRequestToUser(UserCreateRequest userCreateRequest) {
        if ( userCreateRequest == null ) {
            return null;
        }

        User user = new User();

        user.setFirstname( userCreateRequest.firstname() );
        user.setLastname( userCreateRequest.lastname() );
        user.setEmail( userCreateRequest.email() );
        user.setPassword( userCreateRequest.password() );

        return user;
    }
}
