import BaseError from "./base-error";

class ValidationError extends BaseError{
  constructor(message: string, details?: any) {
    super(400, message);
    this.details = details ?? [];
  }
}

export default ValidationError;