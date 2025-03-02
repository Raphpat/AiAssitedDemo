package com.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

@RestController @RequestMapping("/api/math")
public class MathController {
	private final MathUtils mathUtils;

	public MathController(MathUtils mathUtils) {
		this.mathUtils = mathUtils;
	}

	@PostMapping("/add")
	public ApiResponse<Double> add(@RequestBody MathRequest request, HttpServletRequest servletRequest) {
		try {
			double result = mathUtils.add(request.a(), request.b());
			return ApiResponse.success(result);
		} catch (Exception e) {
			return ApiResponse.error(ApiError.serverError(e.getMessage(), servletRequest.getRequestURI()));
		}
	}

	@PostMapping("/subtract")
	public ApiResponse<Double> subtract(@RequestBody MathRequest request, HttpServletRequest servletRequest) {
		try {
			double result = mathUtils.subtract(request.a(), request.b());
			return ApiResponse.success(result);
		} catch (Exception e) {
			return ApiResponse.error(ApiError.serverError(e.getMessage(), servletRequest.getRequestURI()));
		}
	}

	@PostMapping("/multiply")
	public ApiResponse<Double> multiply(@RequestBody MathRequest request, HttpServletRequest servletRequest) {
		try {
			double result = mathUtils.multiply(request.a(), request.b());
			return ApiResponse.success(result);
		} catch (Exception e) {
			return ApiResponse.error(ApiError.serverError(e.getMessage(), servletRequest.getRequestURI()));
		}
	}

	@PostMapping("/divide")
	public ApiResponse<Double> divide(@RequestBody MathRequest request, HttpServletRequest servletRequest) {
		try {
			if (request.b() == 0) {
				return ApiResponse.error(
						ApiError.of("Cannot divide by zero", "DIVISION_BY_ZERO", 400, servletRequest.getRequestURI()));
			}
			double result = mathUtils.divide(request.a(), request.b());
			return ApiResponse.success(result);
		} catch (Exception e) {
			return ApiResponse.error(ApiError.serverError(e.getMessage(), servletRequest.getRequestURI()));
		}
	}

	@GetMapping("/isPrime/{number}")
	public ApiResponse<Boolean> isPrime(@PathVariable int number, HttpServletRequest servletRequest) {
		try {
			boolean result = mathUtils.isPrime(number);
			return ApiResponse.success(result);
		} catch (Exception e) {
			return ApiResponse.error(ApiError.serverError(e.getMessage(), servletRequest.getRequestURI()));
		}
	}
}

record MathRequest(double a, double b) {
}
