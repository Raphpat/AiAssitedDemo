package com.example;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/math")
public class MathController {
  private final MathUtils mathUtils;

  public MathController(MathUtils mathUtils) {
    this.mathUtils = mathUtils;
  }

  @PostMapping("/add")
  public double add(@RequestBody MathRequest request) {
    return mathUtils.add(request.a(), request.b());
  }

  @PostMapping("/multiply")
  public double multiply(@RequestBody MathRequest request) {
    return mathUtils.multiply(request.a(), request.b());
  }

  @PostMapping("/divide")
  public double divide(@RequestBody MathRequest request) {
    return mathUtils.divide(request.a(), request.b());
  }

  @GetMapping("/isPrime/{number}")
  public boolean isPrime(@PathVariable int number) {
    return mathUtils.isPrime(number);
  }
}

record MathRequest(double a, double b) {}
