class BaseError extends Error {
  status: number;
  isThreated: boolean;
  message: string;
  details: any;

  constructor(status: number, message: string) {
    super(message)

    this.isThreated = true
    this.message = message;
    this.status = status;
  }
}

export default BaseError;