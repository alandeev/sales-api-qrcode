import SchemaValidator from '@shared/utils/schema-validator';
import Joi from 'joi'

const CreateRestaurantSchema = Joi.object({
  name: Joi.string().min(4).max(40).required(),
})


interface IRequest {
  name: string
}

const bodyValidator = (data: Partial<IRequest>) => {
  const value = SchemaValidator(CreateRestaurantSchema, data)
  return value;
}

export default bodyValidator;