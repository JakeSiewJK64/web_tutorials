package com.hibernatingbeaver.example.dao;

import java.util.List;

import com.hibernatingbeaver.example.models.MenuItem;

public interface MenuDao {
  List<MenuItem> getAllMenuItem();
}
