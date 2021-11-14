class BaseError extends Error {
  status;
  details = null
  constructor(status: number, message: string) {
    super(message)
    this.status = status;
    this.message = message;
  }
}

export default BaseError;