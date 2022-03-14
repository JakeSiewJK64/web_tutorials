package com.hibernatingbeaver.example.dao.daoimpl;

import java.util.List;

import javax.persistence.EntityManager;

import com.hibernatingbeaver.example.dao.CategoryDao;
import com.hibernatingbeaver.example.models.Category;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CategoryDaoImpl implements CategoryDao {
  @Autowired
  private EntityManager entityManager;

  @Override
  public List<Category> getAllCategory() {
    Session currentSession = entityManager.unwrap(Session.class);
    Query<Category> query = currentSession.createQuery("FROM Category", Category.class);
    return query.getResultList();
  }

  @Override
  public void saveCategory(Category category) {
    // TODO Auto-generated method stub

  }
}
