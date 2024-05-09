package com.yarvin.mathinf.controller;

import com.yarvin.mathinf.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/user")
@RequiredArgsConstructor
public class UserController {

private final UserService userService;
}
