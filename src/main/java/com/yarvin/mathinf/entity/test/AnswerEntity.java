package com.yarvin.mathinf.entity.test;

import jakarta.persistence.*;
import lombok.*;

@Entity(name = "answers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AnswerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @OneToOne
    private QuestionEntity question;

    private String text;
}
