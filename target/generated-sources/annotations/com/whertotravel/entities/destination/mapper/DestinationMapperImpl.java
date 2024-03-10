package com.whertotravel.entities.destination.mapper;

import com.whertotravel.entities.destination.models.Destination;
import com.whertotravel.entities.destination.models.DestinationCreateRequestDTO;
import com.whertotravel.entities.destination.models.DestinationResponseDTO;
import com.whertotravel.entities.image.model.Image;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-03-10T10:20:38+0100",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.9 (Oracle Corporation)"
)
@Component
public class DestinationMapperImpl implements DestinationMapper {

    @Override
    public Destination destinationCreateRequestToDestination(DestinationCreateRequestDTO destinationCreateRequestDTO) {
        if ( destinationCreateRequestDTO == null ) {
            return null;
        }

        Destination.DestinationBuilder destination = Destination.builder();

        destination.title( destinationCreateRequestDTO.getTitle() );
        destination.description( destinationCreateRequestDTO.getDescription() );

        return destination.build();
    }

    @Override
    public DestinationResponseDTO destinationToResponse(Destination destination) {
        if ( destination == null ) {
            return null;
        }

        DestinationResponseDTO destinationResponseDTO = new DestinationResponseDTO();

        destinationResponseDTO.setId( destination.getId() );
        destinationResponseDTO.setTitle( destination.getTitle() );
        destinationResponseDTO.setDescription( destination.getDescription() );
        List<Image> list = destination.getImages();
        if ( list != null ) {
            destinationResponseDTO.setImages( new ArrayList<Image>( list ) );
        }

        return destinationResponseDTO;
    }
}
