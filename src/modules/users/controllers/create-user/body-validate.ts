import SchemaValidator from '@shared/utils/schema-validator';
import Joi from 'joi'

const CreateUserSchema = Joi.object({
  name: Joi.string().min(4).max(20).required(),
  username: Joi.string().min(4).max(20).required(),
  password: Joi.string().min(4).max(20).required()
})


interface IRequest {
  name: string;
  username: string;
  password: string;
}

const bodyValidator = (data: Partial<IRequest>) => {
  const value = SchemaValidator(CreateUserSchema, data)
  return value;
}

export default bodyValidator;