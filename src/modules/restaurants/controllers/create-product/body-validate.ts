import permissions from '@modules/restaurants/contants/permissions';
import SchemaValidator from '@shared/utils/schema-validator';
import Joi from 'joi'

const keysPermission = permissions.map(p => p.key)

const CraeteEmployeeSchema = Joi.object({
  name: Joi.string().min(4).max(40).required(),
  description: Joi.string().max(255).optional(),
  price: Joi.number().min(100).max(1000000).required()
})

interface IRequest {
  name: string
  description: string
  price: number
}

const bodyValidator = (data: Partial<IRequest>) => {
  const value = SchemaValidator(CraeteEmployeeSchema, data)
  return value;
}

export default bodyValidator;