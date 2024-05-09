package com.yarvin.mathinf.entity.user;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;

@Getter
@Setter
@Entity(name = "subscribes")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SubscribeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Boolean active;

    private Timestamp startDate;

    private Timestamp expiresDate;
}
