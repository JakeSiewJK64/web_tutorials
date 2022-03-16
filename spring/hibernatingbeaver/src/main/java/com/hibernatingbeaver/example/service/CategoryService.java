package com.hibernatingbeaver.example.service;

import java.util.List;

import com.hibernatingbeaver.example.models.Category;

public interface CategoryService {
  List<Category> getAllCategory();

  Category findOneCategory(String name);

  List<Category> paginatedCategories(Integer page, Integer pageSize);

  void saveCategory(Category category);
}
