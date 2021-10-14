import ValidationError from '@errors/validation-error'
import User from '../../database/models/User'
import validateBody from './body-validation'
import bcrypt from 'bcryptjs'

interface UserSchema {
  name?: string,
  username?: string,
  password?: string
}

const createUser = async (body: UserSchema) => {
  await validateBody(body)

  const usernameAlreadyUsed = await User.findByUsername(body.username)
 
  console.log({
    usernameAlreadyUsed
  })

  if(usernameAlreadyUsed) {
    throw new ValidationError("Username already exists")
  }

  const encryptPassword = bcrypt.hashSync(body.password, 8)

  const user = await User.create({
    name: body.name,
    username: body.username,
    password: encryptPassword,
  })

  return user;
}

export default createUser