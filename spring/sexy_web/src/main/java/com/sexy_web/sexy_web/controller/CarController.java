package com.sexy_web.sexy_web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sexy_web.sexy_web.interfaces.Car;

@RestController
@RequestMapping("/cars")
public class CarController implements Car {

  private final Car teslaCar;

  @Autowired
  public CarController(@Qualifier("teslaCar") Car teslaCar) {
    this.teslaCar = teslaCar;
  }

  @GetMapping
  @Override
  public String drive() {
    return teslaCar.drive();
  }
}
