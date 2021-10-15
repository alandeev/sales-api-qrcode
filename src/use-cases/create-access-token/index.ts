import * as jwt from 'jsonwebtoken'

export interface IDecodedToken {
  id: string,
  groups: string[]
}

const createAccessToken = (data: IDecodedToken) => {
  const privateKey = process.env.SECRET_JWT_KEY

  const token = jwt.sign(data, privateKey, {
    expiresIn: '1d'
  })

  return `Bearer ${token}`;
}

export default createAccessToken;


