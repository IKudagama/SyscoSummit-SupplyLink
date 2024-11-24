package com.example.supplylink_category.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "category")
public class Category {

    @Id
    private String id;
    private String name;
    private String description;

    // Getters and Setters
}
