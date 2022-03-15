package com.hibernatingbeaver.example.dao;

import java.util.List;

import com.hibernatingbeaver.example.models.Category;

public interface CategoryDao {
  List<Category> getAllCategory();
  Category findOneCategory(String name);
  void saveCategory(Category category);
}