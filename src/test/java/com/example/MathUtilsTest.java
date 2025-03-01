package com.example;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.*;

class MathUtilsTest {

    private MathUtils mathUtils;

    @BeforeEach
    void setUp() {
        mathUtils = new MathUtils();
    }

    @Test
    @DisplayName("Addition should work for positive numbers")
    void testAddPositiveNumbers() {
        assertEquals(5, mathUtils.add(2, 3), "2 + 3 should equal 5");
    }

    @Test
    @DisplayName("Addition should work with negative numbers")
    void testAddNegativeNumbers() {
        assertEquals(-5, mathUtils.add(-2, -3), "-2 + -3 should equal -5");
        assertEquals(1, mathUtils.add(-2, 3), "-2 + 3 should equal 1");
    }

    @ParameterizedTest
    @CsvSource({
        "3, 4, 12",
        "-3, 4, -12",
        "0, 5, 0",
        "-2, -3, 6"
    })
    @DisplayName("Multiplication should work for various inputs")
    void testMultiply(int a, int b, int expected) {
        assertEquals(expected, mathUtils.multiply(a, b),
            String.format("%d * %d should equal %d", a, b, expected));
    }

    @Test
    @DisplayName("Division should work for positive numbers")
    void testDivide() {
        assertEquals(2.0, mathUtils.divide(4, 2), "4 / 2 should equal 2.0");
        assertEquals(2.5, mathUtils.divide(5, 2), "5 / 2 should equal 2.5");
    }

    @Test
    @DisplayName("Division by zero should throw ArithmeticException")
    void testDivideByZero() {
        Exception exception = assertThrows(ArithmeticException.class,
            () -> mathUtils.divide(1, 0),
            "Division by zero should throw ArithmeticException");
        
        assertEquals("Division by zero is not allowed", exception.getMessage(),
            "Exception message should match");
    }

    @ParameterizedTest
    @ValueSource(ints = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29})
    @DisplayName("Should identify prime numbers correctly")
    void testIsPrimeWithPrimeNumbers(int number) {
        assertTrue(mathUtils.isPrime(number),
            number + " should be identified as prime");
    }

    @ParameterizedTest
    @ValueSource(ints = {-1, 0, 1, 4, 6, 8, 9, 10, 12, 14, 15})
    @DisplayName("Should identify non-prime numbers correctly")
    void testIsPrimeWithNonPrimeNumbers(int number) {
        assertFalse(mathUtils.isPrime(number),
            number + " should be identified as non-prime");
    }
} 