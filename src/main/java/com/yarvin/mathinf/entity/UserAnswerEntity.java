package com.yarvin.mathinf.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity(name = "user_answer")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserAnswerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String text;

    @ManyToOne
    private QuestionEntity question;
}
