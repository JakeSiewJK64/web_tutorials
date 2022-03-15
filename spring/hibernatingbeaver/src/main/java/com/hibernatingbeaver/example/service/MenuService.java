package com.hibernatingbeaver.example.service;

import java.util.List;

import com.hibernatingbeaver.example.models.MenuItem;

public interface MenuService {
  List<MenuItem> getAllMenuItems();
  MenuItem findOMenuItem(Integer id);
}
