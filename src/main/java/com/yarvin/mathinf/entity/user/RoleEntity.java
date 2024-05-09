package com.yarvin.mathinf.entity.user;


import jakarta.persistence.*;
import lombok.*;

@Entity(name = "roles")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RoleEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
}
