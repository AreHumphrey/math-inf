package com.yarvin.mathinf.entity;

import jakarta.persistence.*;
import lombok.*;

@Builder
@Entity(name = "Questions")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class QuestionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String text;

    private String questionType;

    @ManyToOne
    private TestEntity test;
}
