import SchemaValidator from '@shared/utils/schema-validator';
import Joi from 'joi'

const AuthSchema = Joi.object({
  username: Joi.string().min(4).max(20).required(),
  password: Joi.string().min(4).max(20).required()
})


interface IRequest {
  username: string;
  password: string;
}

const bodyValidator = (data: Partial<IRequest>) => {
  const value = SchemaValidator(AuthSchema, data)
  return value;
}

export default bodyValidator;