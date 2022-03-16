package com.hibernatingbeaver.example.dao;

import java.util.List;

import com.hibernatingbeaver.example.models.MenuItem;

public interface MenuDao {
  List<MenuItem> getAllMenuItem();

  MenuItem findOneMenu(Integer id);

  List<MenuItem> getPagedMenu(Integer pageNumber, Integer pageSize);
}
