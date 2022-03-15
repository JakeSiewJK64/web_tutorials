package com.hibernatingbeaver.example.controller;

import java.util.List;

import com.hibernatingbeaver.example.models.Category;
import com.hibernatingbeaver.example.service.CategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * CategoryController
 */
@RestController
@RequestMapping("/api/category")
public class CategoryController {

  @Autowired
  private CategoryService categoryService;

  @GetMapping("/allCategories")
  public List<Category> getAllCategories() {
    return categoryService.getAllCategory();
  }

  @GetMapping("/findOneCategory")
  @ResponseBody
  public Category findOneCategory(String name) {
    return categoryService.findOneCategory(name);
  }
}