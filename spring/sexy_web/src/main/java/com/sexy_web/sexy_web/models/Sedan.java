package com.sexy_web.sexy_web.models;

import com.sexy_web.sexy_web.interfaces.Car;

import org.springframework.stereotype.Service;

@Service("sedan")
public class Sedan implements Car {

  @Override
  public String drive() {
    return "driving sedan";
  }
}
