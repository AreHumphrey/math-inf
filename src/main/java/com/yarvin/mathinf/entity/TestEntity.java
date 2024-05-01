package com.yarvin.mathinf.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity(name = "Tests")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class TestEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String grade;

    private String mark;

    @ManyToOne
    private UserEntity user;


}
