import permissions from '@modules/restaurants/contants/permissions';
import SchemaValidator from '@shared/utils/schema-validator';
import Joi from 'joi'

const keysPermission = permissions.map(p => p.key)

const CraeteEmployeeSchema = Joi.object({
  name: Joi.string().min(4).max(40).required(),
  username: Joi.string().min(4).max(20).required(),
  password: Joi.string().min(4).max(20).required(),
  permissions: Joi.array()
    .items(...keysPermission)
    .optional()
    .default([])
})

interface IRequest {
  name: string
  username: string
  password: string
  permissions: string[]
}

const bodyValidator = (data: Partial<IRequest>) => {
  const value = SchemaValidator(CraeteEmployeeSchema, data)
  return value;
}

export default bodyValidator;