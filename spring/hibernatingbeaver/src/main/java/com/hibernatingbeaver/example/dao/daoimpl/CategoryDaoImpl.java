package com.hibernatingbeaver.example.dao.daoimpl;

import java.util.List;

import javax.persistence.EntityManager;

import com.hibernatingbeaver.example.dao.CategoryDao;
import com.hibernatingbeaver.example.models.Category;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

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
    Session currentSession = entityManager.unwrap(Session.class);
    Category cat = category;
    currentSession.save(cat);
  }

  @Override
  public Category findOneCategory(String name) {
    Session currentSession = entityManager.unwrap(Session.class);
    String queryString = "FROM Category AS C WHERE C.categoryName = :name";
    Query<Category> query = currentSession.createQuery(queryString, Category.class);
    query.setParameter("name", name);
    return query.getResultList().get(0);
  }

  @Override
  public List<Category> paginatedCategory(Integer page, Integer pageIndex) {
    Session currentSession = entityManager.unwrap(Session.class);
    Query<Category> query = currentSession.createQuery("FROM Category", Category.class);
    query.setFirstResult(page - 1);
    query.setMaxResults(pageIndex);
    return query.list();
  }
}
