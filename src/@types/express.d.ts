export interface ITokenDecoded {
  id: string;
  permissions: string[]
}

declare global {
  namespace Express {
    interface Request {
      user: ITokenDecoded
    }
  }
}