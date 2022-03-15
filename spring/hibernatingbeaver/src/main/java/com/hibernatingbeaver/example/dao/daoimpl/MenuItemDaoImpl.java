package com.hibernatingbeaver.example.dao.daoimpl;

import java.util.List;

import javax.persistence.EntityManager;

import com.hibernatingbeaver.example.dao.MenuDao;
import com.hibernatingbeaver.example.models.MenuItem;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MenuItemDaoImpl implements MenuDao{

  @Autowired
  private EntityManager entityManager;

  @Override
  public List<MenuItem> getAllMenuItem() {
    Session currentSession = entityManager.unwrap(Session.class);
    Query<MenuItem> query = currentSession.createQuery("FROM MenuItem", MenuItem.class);
    return query.getResultList();
  }
}
