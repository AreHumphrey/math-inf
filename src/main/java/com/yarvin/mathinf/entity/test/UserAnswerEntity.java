package com.yarvin.mathinf.entity.test;

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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String text;

    @ManyToOne
    private QuestionEntity question;
}
