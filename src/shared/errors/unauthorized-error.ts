import BaseError from "./base-error";

class UnauthorizedError extends BaseError{
  constructor(message: string) {
    super(401, message);
  }
}

export default UnauthorizedError;