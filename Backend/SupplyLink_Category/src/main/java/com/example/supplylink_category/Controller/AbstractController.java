package com.example.supplylink_category.Controller;

import com.example.supplylink_category.model.Category;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public abstract class AbstractController {

    @GetMapping
    public abstract ResponseEntity<List<Category>> getAllCategories();

    @GetMapping("/{id}")
    public abstract ResponseEntity<Category> getCategoryById(@PathVariable String id);

    @PostMapping
    public abstract ResponseEntity<Category> createCategory(@RequestBody Category category);

    @DeleteMapping("/{id}")
    public abstract ResponseEntity<Void> deleteCategory(@PathVariable String id);
}
