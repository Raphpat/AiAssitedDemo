package com.example;

import org.springframework.stereotype.Component;

@Component
public class MathUtils {

	/**
	 * Adds two numbers
	 *
	 * @param a first number
	 * @param b second number
	 * @return sum of a and b
	 */
	public double add(double a, double b) {
		return a + b;
	}

	/**
	 * Subtracts two numbers
	 *
	 * @param a first number
	 * @param b second number
	 * @return result of a subtracted by b
	 */
	public double subtract(double a, double b) {
		return a - b;
	}

	/**
	 * Multiplies two numbers
	 *
	 * @param a first number
	 * @param b second number
	 * @return product of a and b
	 */
	public double multiply(double a, double b) {
		return a * b;
	}

	/**
	 * Divides two numbers
	 *
	 * @param a dividend
	 * @param b divisor
	 * @return result of a divided by b
	 * @throws ArithmeticException if b is zero
	 */
	public double divide(double a, double b) {
		if (b == 0) {
			throw new ArithmeticException("Division by zero is not allowed");
		}
		return a / b;
	}

	/**
	 * Checks if a number is prime
	 *
	 * @param number number to check
	 * @return true if the number is prime, false otherwise
	 */
	public boolean isPrime(int number) {
		if (number <= 1) {
			return false;
		}
		for (int i = 2; i <= Math.sqrt(number); i++) {
			if (number % i == 0) {
				return false;
			}
		}
		return true;
	}
}
