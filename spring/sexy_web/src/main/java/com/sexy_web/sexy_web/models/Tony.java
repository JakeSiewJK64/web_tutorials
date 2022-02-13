package com.sexy_web.sexy_web.models;

import org.springframework.stereotype.Service;

import com.sexy_web.sexy_web.interfaces.Employee;

@Service("Tony")
public class Tony implements Employee {

  @Override
  public String clockIn() {
    return "Tony clocked in";
  }
}
