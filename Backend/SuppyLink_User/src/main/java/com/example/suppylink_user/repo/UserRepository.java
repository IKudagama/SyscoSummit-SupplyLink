package com.example.suppylink_user.repo;

import com.example.suppylink_user.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends MongoRepository<User,UUID>{
    Optional<User> findByEmail(String email);
}
