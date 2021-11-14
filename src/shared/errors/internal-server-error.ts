import BaseError from "./base-error";

class InternalServerError extends BaseError{
  constructor(message?: string) {
    super(500, message || "internal server error");
  }
}

export default InternalServerError;