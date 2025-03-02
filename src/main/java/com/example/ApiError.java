package com.example;

import java.time.Instant;

public record ApiError(String message, String code, int status, String timestamp, String path, ErrorSeverity severity) {
	public static ApiError of(String message, String code, int status, String path) {
		return new ApiError(message, code, status, Instant.now().toString(), path, ErrorSeverity.ERROR);
	}

	public static ApiError badRequest(String message, String path) {
		return of(message, "VALIDATION_ERROR", 400, path);
	}

	public static ApiError serverError(String message, String path) {
		return of(message, "SERVER_ERROR", 500, path);
	}
}

enum ErrorSeverity {
	ERROR, WARNING, INFO
}
