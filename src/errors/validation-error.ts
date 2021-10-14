import BaseError from "./base-error";

class ValidationError extends BaseError {
  details = []
  constructor(message, details = []) {
    super(400, message)
    this.details = details;
  }
}

export default ValidationError;