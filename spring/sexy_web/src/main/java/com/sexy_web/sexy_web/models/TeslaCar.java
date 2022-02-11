package com.sexy_web.sexy_web.models;

import com.sexy_web.sexy_web.interfaces.Car;

import org.springframework.stereotype.Service;

@Service("teslaCar")
public class TeslaCar implements Car {

  @Override
  public String drive() {
    return "Driving Tesla Car";
  }
}
