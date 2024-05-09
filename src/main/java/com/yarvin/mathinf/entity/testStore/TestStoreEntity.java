package com.yarvin.mathinf.entity.testStore;

import jakarta.persistence.*;
import lombok.*;

@Entity(name="test_store")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TestStoreEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
}
