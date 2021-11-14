import jwt from 'jsonwebtoken'

interface ICreateAccessToken {
  payload: Object
  secret_key: string
  expires_in: string
}

const CreateAccessToken = ({
  payload,
  secret_key,
  expires_in
}: ICreateAccessToken) => {
  return jwt.sign(payload, secret_key, {
    expiresIn: expires_in
  })
}

export default CreateAccessToken;