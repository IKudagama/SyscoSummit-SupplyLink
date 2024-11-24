package com.example.suppylink_user.Controller;

import com.example.suppylink_user.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public abstract class AbstractController {

    @GetMapping
    public abstract ResponseEntity<List<User>> getAllUsers();

    @GetMapping("/{id}")
    public abstract ResponseEntity<User> getUserById(@PathVariable String id);

    @PostMapping
    public abstract ResponseEntity<User> createUser(@RequestBody User user);

    @DeleteMapping("/{id}")
    public abstract ResponseEntity<Void> deleteUser(@PathVariable String id);
}
