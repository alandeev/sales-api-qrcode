import BaseError from "./base-error";

class UnauthorizedError extends BaseError {
  details = []
  constructor(message, details = []) {
    super(400, message)
    this.details = details;
  }
}

export default UnauthorizedError;