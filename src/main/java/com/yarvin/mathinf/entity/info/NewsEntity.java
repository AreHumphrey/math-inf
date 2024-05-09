package com.yarvin.mathinf.entity.info;

import jakarta.persistence.*;
import lombok.*;

@Entity(name = "news")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class NewsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String title;

    private String text;
}
