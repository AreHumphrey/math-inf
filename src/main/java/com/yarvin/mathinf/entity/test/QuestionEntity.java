package com.yarvin.mathinf.entity.test;

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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String text;

    private String questionType;

    @ManyToOne
    private TestEntity test;
}
