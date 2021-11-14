import Joi from 'joi'
import ValidationError from '@shared/errors/validation-error'

const SchemaValidator = <T>(schema: Joi.ObjectSchema, data: Partial<T>): T => {
  if(!data) {
    throw new ValidationError("Body is empty")
  }
  
  const { value, error } = schema.validate(data, {
    abortEarly: false
  })

  if(error) {
    throw new ValidationError(error.message, error.details)
  }
  
  return value;
}

export default SchemaValidator;