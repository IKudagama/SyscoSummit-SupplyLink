package com.example.suppylink_user.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(String message){
        super((message));
    }

}
