package com.hibernatingbeaver.example.service.serviceimpl;

import java.util.List;

import com.hibernatingbeaver.example.dao.CategoryDao;
import com.hibernatingbeaver.example.models.Category;
import com.hibernatingbeaver.example.service.CategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CategoryServiceImpl implements CategoryService {

  @Autowired
  private CategoryDao categoryDao;

  @Transactional
  @Override
  public List<Category> getAllCategory() {
    return categoryDao.getAllCategory();
  }

  @Override
  public void saveCategory(Category category) {
  }

  @Override
  public Category findOneCategory(String name) {
    return categoryDao.findOneCategory(name);
  }

  @Override
  public List<Category> paginatedCategories(Integer page, Integer pageSize) {
    return categoryDao.paginatedCategory(page, pageSize);
  }
}
