package com.hibernatingbeaver.example.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * category
 */
@Entity
@Table(name = "category", schema = "public")
public class Category implements Serializable {

  @Id
  @Column(name = "category_name")
  private String categoryName;

  @Column(name = "category_description")
  private String categoryDescription;

  public Category(String categoryName, String categoryDescription) {
    this.categoryName = categoryName;
    this.categoryDescription = categoryDescription;
  }

  public Category() {
  }

  public String getCategoryName() {
    return categoryName;
  }

  public void setCategoryName(String categoryName) {
    this.categoryName = categoryName;
  }

  public String getCategoryDescription() {
    return categoryDescription;
  }

  public void setCategoryDescription(String categoryDescription) {
    this.categoryDescription = categoryDescription;
  }

}