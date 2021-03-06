package com.hibernatingbeaver.example.controller;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import com.hibernatingbeaver.example.models.Category;
import com.hibernatingbeaver.example.models.DTO.CategoryDto;
import com.hibernatingbeaver.example.service.CategoryService;
import com.hibernatingbeaver.example.services.ExportCategoriesCSV;
import com.hibernatingbeaver.example.services.ExportExcel;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

  @GetMapping("/paginatedCategory")
  @ResponseBody
  public List<Category> getPaginatedCategory(@RequestParam Integer page, Integer pageSize) {
    return categoryService.paginatedCategories(page, pageSize);
  }

  @GetMapping("/exportCategoryExcel")
  public void exportCategoryExcel(HttpServletResponse response) throws IOException {
    response.setContentType("application/octet-stream");
    DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd");

    String currentDateTime = dateFormatter.format(new Date());
    String headerKey = "Content-Disposition";
    String headerValue = "attachment; filename=records_" + currentDateTime + ".xlsx";

    response.setHeader(headerKey, headerValue);

    List<Category> categories = categoryService.getAllCategory();
    ExportExcel generator = new ExportExcel(categories);

    generator.generateExcel(response);
  }

  @GetMapping("/exportCategoryCSV")
  public void exportCategoryCSV(HttpServletResponse response) throws IOException {
    DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

    String headerKey = "Content-Disposition";
    String headerValue = "attachment; filename=category_" + dateFormat.format(new Date()) + ".csv";

    response.setContentType("application/octet-stream");
    response.setHeader(headerKey, headerValue);

    ExportCategoriesCSV exportCategoriesCSV = new ExportCategoriesCSV(categoryService.getAllCategory());
    exportCategoriesCSV.generateCSV(response);
  }

  @PostMapping("/upsertCategory")
  public String saveCategory(@RequestBody CategoryDto category) {
    ModelMapper modelMapper = new ModelMapper();
    return categoryService.saveCategory(modelMapper.map(category, Category.class));
  }
}