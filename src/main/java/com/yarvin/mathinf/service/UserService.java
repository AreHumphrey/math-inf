package com.yarvin.mathinf.service;

import com.yarvin.mathinf.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;



@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;
}
