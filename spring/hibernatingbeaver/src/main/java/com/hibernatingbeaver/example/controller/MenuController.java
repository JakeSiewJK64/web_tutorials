package com.hibernatingbeaver.example.controller;

import java.util.List;

import com.hibernatingbeaver.example.models.MenuItem;
import com.hibernatingbeaver.example.service.MenuService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/menu")
public class MenuController {
  @Autowired
  private MenuService menuService;

  @GetMapping("allMenu")
  public List<MenuItem> getAllMenu() {
    return menuService.getAllMenuItems();
  }

  @ResponseBody
  @GetMapping("findMenu")
  public MenuItem findOneMenu(@RequestParam Integer id) {
    return menuService.findOMenuItem(id);
  }

  @ResponseBody
  @GetMapping("paginatedMenu")
  public List<MenuItem> paginatedMenu(@RequestParam Integer page, Integer pageSize) {
    return menuService.paginatedMenu(page, pageSize);
  }
}
