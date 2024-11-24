package com.example.supplylink_category.Service;

import com.example.supplylink_category.model.Category;

import java.util.List;

public interface CategoryService {
    List<Category> getAllCategories();
    Category getCategoryById(String id);
    Category createCategory(Category category);
    void deleteCategory(String id);
}
