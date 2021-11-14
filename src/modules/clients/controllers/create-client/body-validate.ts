import SchemaValidator from '@shared/utils/schema-validator';
import Joi from 'joi'

const CreateClientSchema = Joi.object({
  name: Joi.string().min(4).max(12).required(),
  email: Joi.string().min(8).email().required(),
  password: Joi.string().min(4).max(20).required()
})


interface IRequest {
  name: string;
  email: string;
  password: string;
}

const bodyValidator = (data: Partial<IRequest>) => {
  const value = SchemaValidator(CreateClientSchema, data)
  return value;
}

export default bodyValidator;