package com.yarvin.mathinf.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private UUID id;

    private String username;

    private String password;

    private String grade;

    private String school;

    @ManyToOne
    private SubscribeEntity subscribe;

}
