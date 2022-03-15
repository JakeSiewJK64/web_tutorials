package com.hibernatingbeaver.example.service.serviceimpl;

import java.util.List;

import com.hibernatingbeaver.example.dao.MenuDao;
import com.hibernatingbeaver.example.models.MenuItem;
import com.hibernatingbeaver.example.service.MenuService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MenuServiceImpl implements MenuService {

  @Autowired
  private MenuDao menuDao;

  @Override
  public List<MenuItem> getAllMenuItems() {
    return menuDao.getAllMenuItem();
  }

  @Override
  public MenuItem findOMenuItem(Integer id) {
    return menuDao.findOneMenu(id);
  }
}
