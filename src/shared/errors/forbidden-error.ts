import BaseError from "./base-error";

class ForbiddenError extends BaseError{
  constructor(message: string) {
    super(403, message);
  }
}

export default ForbiddenError;