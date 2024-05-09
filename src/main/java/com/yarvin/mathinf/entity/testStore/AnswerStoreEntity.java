package com.yarvin.mathinf.entity.testStore;

import jakarta.persistence.*;
import lombok.*;

@Entity(name="answer_store")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AnswerStoreEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private QuestionStoreEntity questionStore;

    private String text;
}
