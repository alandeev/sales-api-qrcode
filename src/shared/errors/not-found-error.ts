import BaseError from "./base-error";

class NotFoundError extends BaseError{
  constructor(message: string) {
    super(404, message);
  }
}

export default NotFoundError;