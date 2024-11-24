package com.example.supplylink_category.Repo;

import com.example.supplylink_category.model.Category;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CategoryRepo extends MongoRepository<Category,String> {


}
