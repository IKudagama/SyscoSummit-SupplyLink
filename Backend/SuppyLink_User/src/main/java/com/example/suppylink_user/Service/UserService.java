package com.example.suppylink_user.Service;

import com.example.suppylink_user.model.User;

import java.util.UUID;

public interface UserService {
    User registerUser(User user);
    User getUserByEmail(String email);
    void deleteUser(UUID userId);

}
