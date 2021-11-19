import SchemaValidator from '@shared/utils/schema-validator';
import Joi from 'joi'

const CreateCategorySchema = Joi.object({
  name: Joi.string().required()
})

interface IRequest {
  name: string
}

const bodyValidator = (data: Partial<IRequest>) => {
  const value = SchemaValidator(CreateCategorySchema, data)
  return value;
}

export default bodyValidator;