package dev.ventura.meat_backend_with_spring.exceptions;

public class NotFoundResourceException extends RuntimeException {

  public NotFoundResourceException(String message) {
    super(message);
  }
}
