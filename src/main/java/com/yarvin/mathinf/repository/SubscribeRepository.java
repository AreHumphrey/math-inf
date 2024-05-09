package com.yarvin.mathinf.repository;

import com.yarvin.mathinf.entity.user.SubscribeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubscribeRepository extends JpaRepository<SubscribeEntity, Long> {
}
