package com.yarvin.mathinf.config.mapper;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;


@Component
public class Mapper {

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}
