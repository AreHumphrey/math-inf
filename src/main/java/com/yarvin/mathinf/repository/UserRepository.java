package com.yarvin.mathinf.repository;

import com.yarvin.mathinf.entity.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<UserEntity, UUID> {
    boolean existsUserEntitiesById(UUID id);
}
