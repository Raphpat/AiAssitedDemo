package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.ValueSource;

class MathUtilsTest {

  private MathUtils mathUtils;

  @BeforeEach
  void setUp() {
    mathUtils = new MathUtils();
  }

  @ParameterizedTest
  @CsvSource({
    "2.0, 3.0, 5.0",
    "-2.0, -3.0, -5.0",
    "-2.0, 3.0, 1.0",
    "0.0, 0.0, 0.0",
    "2.5, 3.5, 6.0"
  })
  @DisplayName("Addition should work for various inputs")
  void testAdd(double a, double b, double expected) {
    assertEquals(
        expected,
        mathUtils.add(a, b),
        String.format("%.1f + %.1f should equal %.1f", a, b, expected));
  }

  @ParameterizedTest
  @CsvSource({
    "3.0, 4.0, 12.0",
    "-3.0, 4.0, -12.0",
    "0.0, 5.0, 0.0",
    "-2.0, -3.0, 6.0",
    "2.5, 2.0, 5.0"
  })
  @DisplayName("Multiplication should work for various inputs")
  void testMultiply(double a, double b, double expected) {
    assertEquals(
        expected,
        mathUtils.multiply(a, b),
        String.format("%.1f * %.1f should equal %.1f", a, b, expected));
  }

  @ParameterizedTest
  @CsvSource({
    "4.0, 2.0, 2.0",
    "5.0, 2.0, 2.5",
    "-6.0, 2.0, -3.0",
    "0.0, 5.0, 0.0",
    "10.0, -2.0, -5.0"
  })
  @DisplayName("Division should work for various inputs")
  void testDivide(double a, double b, double expected) {
    assertEquals(
        expected,
        mathUtils.divide(a, b),
        String.format("%.1f / %.1f should equal %.1f", a, b, expected));
  }

  @Test
  @DisplayName("Division by zero should throw ArithmeticException")
  void testDivideByZero() {
    Exception exception =
        assertThrows(
            ArithmeticException.class,
            () -> mathUtils.divide(1.0, 0.0),
            "Division by zero should throw ArithmeticException");

    assertEquals(
        "Division by zero is not allowed",
        exception.getMessage(),
        "Exception message should match");
  }

  @ParameterizedTest
  @ValueSource(ints = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29})
  @DisplayName("Should identify prime numbers correctly")
  void testIsPrimeWithPrimeNumbers(int number) {
    assertTrue(mathUtils.isPrime(number), number + " should be identified as prime");
  }

  @ParameterizedTest
  @ValueSource(ints = {-1, 0, 1, 4, 6, 8, 9, 10, 12, 14, 15})
  @DisplayName("Should identify non-prime numbers correctly")
  void testIsPrimeWithNonPrimeNumbers(int number) {
    assertFalse(mathUtils.isPrime(number), number + " should be identified as non-prime");
  }
}
