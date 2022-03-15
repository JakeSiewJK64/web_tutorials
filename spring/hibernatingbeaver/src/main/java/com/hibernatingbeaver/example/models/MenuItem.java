package com.hibernatingbeaver.example.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "menu")
public class MenuItem {

  @Id
  @Column(name = "menu_id")
  private Integer menuId;

  @Column(name = "menu_name")
  private String menuName;

  @Column(name = "price")
  private Float price;

  @Column(name = "stock")
  private Float stock;

  public MenuItem() {
    // COMMENT: Empty Contructor
  }

  public Integer getMenuId() {
    return menuId;
  }

  public void setMenuId(Integer menuId) {
    this.menuId = menuId;
  }

  public String getMenuName() {
    return menuName;
  }

  public void setMenuName(String menuName) {
    this.menuName = menuName;
  }

  public Float getPrice() {
    return price;
  }

  public void setPrice(Float price) {
    this.price = price;
  }

  public Float getStock() {
    return stock;
  }

  public void setStock(Float stock) {
    this.stock = stock;
  }

  
}
