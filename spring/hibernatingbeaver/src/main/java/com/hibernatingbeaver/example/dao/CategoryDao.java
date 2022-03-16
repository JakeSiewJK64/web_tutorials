package com.hibernatingbeaver.example.dao;

import java.util.List;

import com.hibernatingbeaver.example.models.Category;

public interface CategoryDao {
  List<Category> getAllCategory();

  Category findOneCategory(String name);

  List<Category> paginatedCategory(Integer page, Integer pageIndex);

  void saveCategory(Category category);
}