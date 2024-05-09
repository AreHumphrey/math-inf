package com.yarvin.mathinf.entity.testStore;

import jakarta.persistence.*;
import lombok.*;

@Entity(name="question_store")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class QuestionStoreEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private TestStoreEntity testStore;

    private String questionType;

    private String text;
}
